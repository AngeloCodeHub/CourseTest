

Set-Location -Path $PSScriptRoot

for ($i = 5670; $i -lt 5674; $i++) {
	$result = Test-NetConnection "127.0.0.1" -Port $i
	if ($result.TcpTestSucceeded -eq $false) {
		$Port = $i
		break
	}
}
$localAdd = "http://127.0.0.1:" + $Port
# $chromeBinDir = "D:\ProgramPortable\ChromePortable64\chrome.exe"
$chromeBinDir = "C:\ProgramPortable\ChromePortable64\chrome.exe"
# $chromeuserDir = "--user-data-dir=D:\ChromeUser\kkkendy"
$chromeuserDir = "--user-data-dir=C:\ChromeUserDatat"
Start-Process -FilePath $chromeBinDir -ArgumentList $localAdd, $chromeuserDir

# code .
# github

explorer.exe $pwd\assets
http-server -s -p $Port
