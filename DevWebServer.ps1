# TODO:

Set-Location -Path $PSScriptRoot

$location = "AsureWKS", "SamingHome", "honray"

$chromeBinDir 
$chromeuserDir
$chromeAt_Asure = "D:\ProgramPortable\ChromePortable64\chrome.exe", "--user-data-dir=D:\ChromeUser\kkkendy"
$chromeAt_Home = "C:\ProgramPortable\ChromePortable64\chrome.exe", "--user-data-dir=C:\ChromeUserDatat"

switch (HOSTNAME.EXE) {
	$location[0] {
		$chromeBinDir = $chromeAt_Asure[0]
		$chromeuserDir = $chromeAt_Asure[1]
	}
	$location[1]{
		$chromeBinDir = $chromeAt_Home[0]
		$chromeuserDir = $chromeAt_Home[1]
	}
	Default {}
}
 
for ($i = 5670; $i -lt 5674; $i++) {
	$result = Test-NetConnection "127.0.0.1" -Port $i
	if ($result.TcpTestSucceeded -eq $false) {
		$Port = $i
		break
	}
}
$localAdd = "http://127.0.0.1:" + $Port
Start-Process -FilePath $chromeBinDir -ArgumentList $localAdd, $chromeuserDir

# code .
# github

explorer.exe $pwd\assets
http-server -s -p $Port
