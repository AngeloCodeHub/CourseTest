<# 
開發啟動程式
#>

# working directory
Set-Location -Path $PSScriptRoot

$location = "AsureWKS", "samin", "honray"

$chromeBinDir 
$chromeuserDir
$chromeAt_Asure = "D:\ProgramPortable\ChromePortable64\chrome.exe", "--user-data-dir=D:\ChromeUser\kkkendy"

foreach ($currentItemName in $location) {
	switch (HOSTNAME.EXE) {
		$location[0] {
			$chromeBinDir = $chromeAt_Asure[0]
			$chromeuserDir = $chromeAt_Asure[1]
		}
		Default {}
	}
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