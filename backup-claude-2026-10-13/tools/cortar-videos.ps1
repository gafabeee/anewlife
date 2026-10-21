<#
  Corta varios videos de uma vez, mantendo so os primeiros N segundos.

  Os originais NUNCA sao alterados: os cortes vao para uma pasta de saida.

  Uso (PowerShell):
    .\tools\cortar-videos.ps1 -Pasta "C:\caminho\dos\videos"
    .\tools\cortar-videos.ps1 -Pasta "C:\caminho\dos\videos" -Segundos 20 -Subpastas
    .\tools\cortar-videos.ps1 -Pasta "C:\videos" -Saida "D:\cortados" -Preciso

  -Pasta      Pasta com os videos (obrigatorio).
  -Saida      Onde gravar os cortes. Padrao: "<Pasta>\cortados".
  -Segundos   Duracao a manter. Padrao: 20.
  -Subpastas  Tambem processa as subpastas e reproduz a mesma estrutura na saida.
  -Preciso    Recodifica o video para cortar exatamente em N segundos.
              Sem isso o corte e instantaneo e sem perda de qualidade, mas pode
              terminar um pouco antes ou depois do 20s exato (corte no quadro-chave).
#>
param(
    [Parameter(Mandatory = $true)][string]$Pasta,
    [string]$Saida,
    [double]$Segundos = 20,
    [switch]$Subpastas,
    [switch]$Preciso
)

$ErrorActionPreference = "Stop"

if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue)) {
    throw "ffmpeg nao encontrado. Instale com: winget install Gyan.FFmpeg"
}
if (-not (Test-Path -LiteralPath $Pasta -PathType Container)) {
    throw "Pasta nao encontrada: $Pasta"
}

$Pasta = (Resolve-Path -LiteralPath $Pasta).Path.TrimEnd('\')
if (-not $Saida) { $Saida = Join-Path $Pasta "cortados" }
New-Item -ItemType Directory -Force -Path $Saida | Out-Null
$Saida = (Resolve-Path -LiteralPath $Saida).Path.TrimEnd('\')

$extensoes = @(".mp4", ".mov", ".m4v", ".webm", ".mkv", ".avi")
$arquivos = Get-ChildItem -LiteralPath $Pasta -File -Recurse:$Subpastas |
    Where-Object { $extensoes -contains $_.Extension.ToLower() } |
    Where-Object {
        # Nunca reprocessa cortes: nem a pasta de saida desta rodada, nem a
        # "cortados" padrao de uma rodada anterior.
        $caminho = $_.FullName
        -not $caminho.StartsWith($Saida + "\", [StringComparison]::OrdinalIgnoreCase) -and
        -not $caminho.StartsWith((Join-Path $Pasta "cortados") + "\", [StringComparison]::OrdinalIgnoreCase)
    }

if (-not $arquivos) { Write-Host "Nenhum video encontrado em $Pasta"; return }

$seg = $Segundos.ToString([Globalization.CultureInfo]::InvariantCulture)
$feitos = 0; $copiados = 0; $falhas = @()
$i = 0
foreach ($arq in $arquivos) {
    $i++
    $relativo = $arq.FullName.Substring($Pasta.Length).TrimStart('\')
    $destino = Join-Path $Saida $relativo
    New-Item -ItemType Directory -Force -Path (Split-Path $destino) | Out-Null
    Write-Host ("[{0}/{1}] {2}" -f $i, $arquivos.Count, $relativo)

    # Duracao do original: se ja for menor que o corte, so copia.
    $dur = & ffprobe -v error -show_entries format=duration -of csv=p=0 -- $arq.FullName 2>$null
    $durNum = 0.0
    if ([double]::TryParse(("$dur").Trim(), [Globalization.NumberStyles]::Float, [Globalization.CultureInfo]::InvariantCulture, [ref]$durNum) -and $durNum -le $Segundos) {
        Copy-Item -LiteralPath $arq.FullName -Destination $destino -Force
        $copiados++
        continue
    }

    if ($Preciso) { $codec = @("-c:v", "libx264", "-crf", "18", "-preset", "medium", "-c:a", "aac", "-b:a", "160k") }
    else          { $codec = @("-c", "copy") }

    & ffmpeg -hide_banner -loglevel error -y -i $arq.FullName -t $seg @codec -movflags +faststart $destino
    if ($LASTEXITCODE -eq 0 -and (Test-Path -LiteralPath $destino)) { $feitos++ }
    else { $falhas += $relativo }
}

Write-Host ""
Write-Host "Cortados: $feitos | Ja eram curtos (copiados): $copiados | Falhas: $($falhas.Count)"
Write-Host "Saida: $Saida"
if ($falhas) { Write-Host "Falharam:"; $falhas | ForEach-Object { "  $_" } }
