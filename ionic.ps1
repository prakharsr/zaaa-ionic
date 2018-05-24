cd ./src/app/

gci -Filter *.css -Recurse | % {Rename-Item -Path $_.FullName -NewName $([IO.Path]::ChangeExtension($_.FullName, ".scss"))}


gci -Filter *.component.ts -Recurse | % {
    $content = Get-Content $_.FullName
    $replaced = $content -replace 'styleUrls:.*', ""
    Set-Content $_.FullName $replaced
}

gci -Filter *.component.ts -Recurse | % {
    $content = Get-Content $_.FullName
    $content = @("import { GobackService } from 'app/services';") + $content
    $replaced = $content -replace 'ngOnInit\(\) {', "ngOnInit() {`n    this.goback.urlInit();";
    Set-Content $_.FullName $replaced
}

gci -Filter *.component.scss -Recurse | % {
    $content = Get-Content $_.FullName
    $parent = "app-" + [System.IO.Path]::GetFileNameWithoutExtension([System.IO.Path]::GetFileNameWithoutExtension($_.FullName))
    $replaced = $parent + "{" + $content + "}"
    Set-Content $_.FullName $replaced
}

gci -Filter *.component.ts -Recurse | % {
    $content = Get-Content $_.FullName
    $replaced = $content -replace 'constructor\(', "constructor(public goback: GobackService, "
    Set-Content $_.FullName $replaced
}


write-host -ForegroundColor Green "Completed Successfully"
