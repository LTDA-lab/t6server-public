## **Tested on Ubuntu 20.04 & Debian 11**
![distributor-logo-debian g256x256](https://github.com/user-attachments/assets/406513d9-0283-414e-aea4-abc20c045661)


**Debian 11:**

```c++
sudo passwd
```

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

https://ia600607.us.archive.org/4/items/2024-12-22-02-35-38-window/2024-12-22%2002_35_38-Window.jpg

https://ia600607.us.archive.org/4/items/2024-12-22-02-35-38-window/2024-12-22%2002_35_52-Window.jpg


Ctrl+c

:wq! enter

```c++
sudo reboot
```


```c++
git clone https://github.com/LTDA-lab/t6server-public.git
```

wine:
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
apt-add-repository 'deb https://dl.winehq.org/wine-builds/debian/ bullseye main'
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

dotnet-sdk-8.0:
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




run server (MP):
Right click on "!start_mp_server.bat" and open it with wine loader

run server (ZM):
Right click on "!start_zm_server.bat" and open it with wine loader


run update (server):

https://github.com/LTDA-lab/plutonium-updater.rs

run server:in powershell ..(without xrdp desktop...)

```c++
chmod +x pluto.sh
```
```c++
./pluto.sh mp
```
Usage: (up|mp|zm)

run iw4madmin:
```c++
chmod +x StartIW4MAdmin.sh
```
```c++
./StartIW4MAdmin.sh
```

you can manage your server files and edit them, avoid using "nano" to edit your .bat , .cfg .. etc.. "WinSCP" server files download version 6.1  .
(connect "WinSCP" in "SCP" mode)

https://sourceforge.net/projects/winscp/files/WinSCP/

task manager:
```c++
apt install htop
```
```c++
htop
```

hardware info:

```c++
apt-get install hardinfo
```

run: click on applications/run programs.



```c++










```



![430702446-fb888c6c-bc4c-4a09-ace1-b0fca9a09f94](https://github.com/user-attachments/assets/a83a26d1-45d7-4fd5-ab42-30299b20dc0c)


**Ubuntu 20.04:**

```c++
sudo passwd
```
```c++
sudo apt update
```
```c++
sudo apt upgrade
```
```c++
sudo apt install -y xfce4 desktop-base xfce4-terminal tango-icon-theme
```

```c++
sudo apt install xrdp -y
```



```c++
echo xfce4-session > $HOME/.xsession
```
```c++
chmod +x .xsession
```
```c++
sudo ufw allow 22:6000/tcp
```
```c++
sudo ufw allow 22:6000/udp
```


 
 ```c++
sudo vim /etc/ssh/sshd_config
```

press the letter c twice to start editing the file:


remove the # characters in front of the following lines and if necessary delete and write "yes" without the quotes.. it should look like this below..see images below (links)

https://ia600607.us.archive.org/4/items/2024-12-22-02-35-38-window/2024-12-22%2002_35_38-Window.jpg

https://ia600607.us.archive.org/4/items/2024-12-22-02-35-38-window/2024-12-22%2002_35_52-Window.jpg

Ctrl+c

:wq! enter

```c++
sudo reboot
```

```c++
sudo apt install git
```
```c++
sudo apt install nano
```


wine:

```c++
dpkg --print-architecture
```

```c++
dpkg --print-foreign-architectures
```

```c++
sudo dpkg --add-architecture i386
```
```c++
dpkg --print-foreign-architectures
```
```c++
sudo mkdir -pm755 /etc/apt/keyrings
```
```c++
sudo wget -O /etc/apt/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key
```
focalUbuntu 20.04Linux Mint 20.x
```c++
sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/ubuntu/dists/focal/winehq-focal.sources
```
oracularUbuntu 24.10
```c++
sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/ubuntu/dists/oracular/winehq-oracular.sources
```

Ubuntu 22.04.5 LTS (Jammy Jellyfish)
```c++
sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/ubuntu/dists/jammy/winehq-jammy.sources
```

nobleUbuntu 24.04Linux Mint 22
```c++
sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/ubuntu/dists/noble/winehq-noble.sources
```

jammyUbuntu 22.04Linux Mint 21.x
```c++
sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/ubuntu/dists/jammy/winehq-jammy.sources
```

```c++
sudo apt update
```

```c++
sudo apt install --install-recommends winehq-stable
```

```c++
sudo apt update
```

```c++
sudo apt install wine -y
```

```c++
winecfg
```



dotnet-sdk-8.0:

```c++
wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
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
git clone https://github.com/LTDA-lab/t6server-public.git
```

```c++
nano !start_mp_server.bat
```

cd /root/t6server-public/Plutonium     <============= Edit this line, inside the "!start_mp_server.bat" file, copying and pasting the path of your Plutonium folder here 

if you can't find the full path of your Plutonium folder ..try this:

cd /D %gamepath%/Plutonium


(add your server key ..configure the port and so on in this file)

Ctrl+x press y enter.




run server (MP):
Right click on "!start_mp_server.bat" and open it with wine loader

run server (ZM):
Right click on "!start_zm_server.bat" and open it with wine loader


run update (server):

https://github.com/LTDA-lab/plutonium-updater.rs


run server:in powershell ..(without xrdp desktop...)

```c++
chmod +x pluto.sh
```
```c++
./pluto.sh mp
```

Usage: (up|mp|zm)

run iw4madmin:
```c++
chmod +x StartIW4MAdmin.sh
```
```c++
./StartIW4MAdmin.sh
```

you can manage your server files and edit them, avoid using "nano" to edit your .bat , .cfg .. etc.. "WinSCP" server files download version 6.1  .
(connect "WinSCP" in "SCP" mode)

https://sourceforge.net/projects/winscp/files/WinSCP/

task manager
```c++
htop
```



