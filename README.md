sudo passwd

su

.
.


sudo apt update

sudo apt upgrade

sudo apt install git

.
.


sudo apt install nano

.
.


git clone https://github.com/LTDA-lab/t6server.git
.
.


Edit your "sshd_config" file to be able to enter your vps with password

sudo vim /etc/ssh/sshd_config

cc


remove the # characters in front of the following lines and if necessary delete and write "yes" without the quotes.. it should look like this below..see images below (links)

https://www.mediafire.com/view/e0cqddnrh6siq1d/2024-12-22_02_35_38-Window.jpg/file

https://www.mediafire.com/view/oexqqgpjp1ezx8q/2024-12-22_02_35_52-Window.jpg/file


Ctrl+c

:wq! enter

sudo reboot


.
.


wine:


dpkg --print-architecture

dpkg --print-foreign-architectures

sudo dpkg --add-architecture i386

dpkg --print-foreign-architectures

sudo mkdir -pm755 /etc/apt/keyrings

sudo wget -O /etc/apt/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key

sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/debian/dists/bookworm/winehq-bookworm.sources

sudo apt update

sudo apt install --install-recommends winehq-stable


echo -e 'export WINEPREFIX=~/.wine\nexport WINEDEBUG=fixme-all\nexport WINEARCH=win64' >> ~/.bashrc
echo -e 'export DISPLAY=:0' >> ~/.bashrc
source ~/.bashrc

winecfg

.
.

install desktop:

sudo apt install -y xfce4 desktop-base xfce4-terminal tango-icon-theme

sudo apt install xrdp -y

.
.


install dotnet-sdk-8.0: (for IW4MAemin)

sudo apt-get update && \
sudo apt-get install -y dotnet-sdk-8.0


.
.

nano !start_mp_server.bat


cd /root/t6server/Plutonium     <============= Edit this line, inside the "!start_mp_server.bat" file, copying and pasting the path of your Plutonium folder here 

if you can't find the full path of your Plutonium folder ..try this:

cd /D %gamepath%/Plutonium


(add your server key ..configure the port and so on in this file)

Ctrl+x press y enter.

.
.


winecfg

run server (MP):

chmod +x pluto.sh

./pluto.sh mp

.

run server (ZM):

chmod +x pluto.sh

./pluto.sh zm


.
.

run update (server):

chmod +x pluto.sh

./pluto.sh up

.
Note: when updating the server, the folder with the updated files is created in:

/home/ubuntu/.wine/drive_c/users/ubuntu/AppData/Local/  <===the path may vary, adapt your user names to this path.. copy the Plutonium folder and paste it over the plutonium you want to update.. replace all.

.
.



run iw4madmin:

chmod +x StartIW4MAdmin.sh

./StartIW4MAdmin.sh



======================================================================


Others .. No for server.

hardware information

sudo apt install hardinfo

.
.

task manager

htop

.
.


chrome:

sudo apt update && sudo apt upgrade

sudo apt install software-properties-common apt-transport-https ca-certificates curl -y

curl -fSsL https://dl.google.com/linux/linux_signing_key.pub | sudo gpg --dearmor | sudo tee /usr/share/keyrings/google-chrome.gpg >> /dev/null

echo deb [arch=amd64 signed-by=/usr/share/keyrings/google-chrome.gpg] http://dl.google.com/linux/chrome/deb/ stable main | sudo tee /etc/apt/sources.list.d/google-chrome.list

sudo apt update

sudo apt install google-chrome-stable

.
.


unzip:

sudo apt install unzip
