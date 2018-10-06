cd ./src/app/


gci -Filter *.component.css -Recurse | % {
    $content = Get-Content $_.FullName
    $parent = "app-" + [System.IO.Path]::GetFileNameWithoutExtension([System.IO.Path]::GetFileNameWithoutExtension($_.FullName))
    $replaced = $parent + "{" + $content + "}"
    Set-Content $_.FullName $replaced
}

gci -Filter *.css -Recurse | % {Rename-Item -Path $_.FullName -NewName $([IO.Path]::ChangeExtension($_.FullName, ".scss"))}


gci -Filter *.component.ts -Recurse | % {
    $content = Get-Content $_.FullName
    $replaced = $content -replace 'styleUrls:.*', ""
    Set-Content $_.FullName $replaced
}


write-host -ForegroundColor Green "Completed Successfully"
