# NgMatLatest

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

In newer npm versions, when a global package is installed, npm creates three different executables for it:

shell executable - used on Linux, macOS, etc.
.cmd executable - used by default on Windows in Command-Prompts
.ps1 executable - used by default in PowerShell.
With previous versions the .ps1 executable was not created by npm and when trying to run tns in PowerShell, the .cmd executable was used.

Due to this change, the tns (and any other newly installed global packages) cannot be executed by default on Windows as the default Execution Policy on Windows is set to Restricted, i.e. it does not allow execution of any scripts.

To change this, you can set different execution policy on your machine as described here:
For example, in case you want to change the execution policy only for the current PowerShell process (i.e. do not persist the value between sessions), you can execute:

Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
NOTE: This will prompt you to confirm the change - select "Yes"

After that you should be able to execute tns commands.