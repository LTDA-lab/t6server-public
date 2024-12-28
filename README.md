```c++
sudo passwd
``

```c++
sudo apt update
```
```c++
sudo apt upgrade
```
```c++
sudo apt install git
```
```c++
sudo apt install nano
```
```c++
sudo vim /etc/ssh/sshd_config
```

press the letter c twice to start editing the file:


remove the # characters in front of the following lines and if necessary delete and write "yes" without the quotes.. it should look like this below..see images below (links)

https://www.mediafire.com/view/e0cqddnrh6siq1d/2024-12-22_02_35_38-Window.jpg

https://www.mediafire.com/view/oexqqgpjp1ezx8q/2024-12-22_02_35_52-Window.jpg


Ctrl+c

:wq! enter

```c++
sudo reboot
```


```c++
git clone https://github.com/LTDA-lab/t6server-public.git
```
```c++
dpkg --add-architecture i386 && \
```
```c++
apt-get update -y && \
```
```c++
apt-get install wget gnupg2 software-properties-common apt-transport-https curl -y
  ```
  
```c++
wget -nc https://dl.winehq.org/wine-builds/winehq.key
```
```c++
apt-key add winehq.key && \
```
```c++
apt-add-repository 'deb https://dl.winehq.org/wine-builds/debian/ buster main'
```
```c++
rm winehq.key
```

```c++
apt update -y
```
```c++
apt install --install-recommends winehq-stable -y 
```
```c++
echo -e 'export WINEPREFIX=~/.wine\nexport WINEDEBUG=fixme-all\nexport WINEARCH=win64' >> ~/.bashrc
```
```c++
echo -e 'export DISPLAY=:0' >> ~/.bashrc
```
```c++
source ~/.bashrc
```
```c++
winecfg
```

install desktop: (if you don't want to install the desktop you can start your server and your IW4Madmin remotely from a "powershell" console... to do this just open a "powershell" terminal and type: ssh root@<vps ip> .. example .. ssh root@18.43.543.23 )


```c++
sudo apt install -y xfce4 desktop-base xfce4-terminal tango-icon-theme
```
```c++
sudo apt install xrdp -y
```

```c++
sudo ufw allow 22:6000/tcp
```
```c++
sudo ufw allow 22:6000/udp
```

```c++
wget https://packages.microsoft.com/config/debian/12/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
```
```c++
sudo dpkg -i packages-microsoft-prod.deb
```
```c++
rm packages-microsoft-prod.deb
```


```c++
sudo apt-get update && \
```
```c++
sudo apt-get install -y dotnet-sdk-8.0
```














```c++
nano !start_mp_server.bat
```


cd /root/t6server-public/Plutonium     <============= Edit this line, inside the "!start_mp_server.bat" file, copying and pasting the path of your Plutonium folder here 

if you can't find the full path of your Plutonium folder ..try this:

cd /D %gamepath%/Plutonium


(add your server key ..configure the port and so on in this file)

Ctrl+x press y enter.


```c++
winecfg
```

run server (MP):
```c++
chmod +x pluto.sh
```
```c++
./pluto.sh mp
```


run server (ZM):
```c++
chmod +x pluto.sh
```
```c++
./pluto.sh zm
```


run update (server):
```c++
chmod +x pluto.sh
```
```c++
./pluto.sh up
```

Note: when updating the server, the folder with the updated files is created in:

/home/debian/.wine/drive_c/users/debian/AppData/Local/  <===the path may vary, adapt your user names to this path.. copy the Plutonium folder and paste it over the plutonium you want to update.. replace all.



run iw4madmin:
```c++
chmod +x StartIW4MAdmin.sh
```
```c++
./StartIW4MAdmin.sh
```

you can manage your server files and edit them, avoid using "nano" to edit your .bat , .cfg .. etc.. "WinSCP" server files download version 6.1  .

https://sourceforge.net/projects/winscp/files/WinSCP/


======================================================================


Others .. No for server.

hardware information
```c++
sudo apt install hardinfo
```

task manager
```c++
htop
```



chrome:
```c++
sudo apt update && sudo apt upgrade
```
```c++
sudo apt install software-properties-common apt-transport-https ca-certificates curl -y
```
```c++
curl -fSsL https://dl.google.com/linux/linux_signing_key.pub | sudo gpg --dearmor | sudo tee /usr/share/keyrings/google-chrome.gpg >> /dev/null
```
```c++
echo deb [arch=amd64 signed-by=/usr/share/keyrings/google-chrome.gpg] http://dl.google.com/linux/chrome/deb/ stable main | sudo tee /etc/apt/sources.list.d/google-chrome.list
```
```c++
sudo apt update
```
```c++
sudo apt install google-chrome-stable
```



unzip:

```c++
sudo apt install unzip
```
