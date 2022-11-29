
Set-Location -Path $PSScriptRoot

for ($i = 5670; $i -lt 5674; $i++) {
    $result = Test-NetConnection "127.0.0.1" -Port $i
    if ($result.TcpTestSucceeded -eq $false) {
        $Port = $i
        break
    }
}

$localAdd = "http://127.0.0.1:" + $Port

# D:\ProgramPortable\ChromePortable64\ChromePortable.exe $localAdd
D:\ProgramPortable\ChromePortable64\App\Chrome64\chrome.exe --user-data-dir=D:\\ChromeUser $localAdd

# explorer.exe $pwd\public\assets
http-server -s -p $Port

