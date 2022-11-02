curl --location https://github.com/tanykazy/chrome-extension-writer/archive/refs/heads/main.zip --output chrome-extension-writer.zip

call powershell -command "Expand-Archive -Force chrome-extension-writer.zip"

cd chrome-extension-writer\chrome-extension-writer*\

xcopy /y /e * ..\..\

cd ..\..\

del chrome-extension-writer.zip /q
rmdir chrome-extension-writer /s /q
