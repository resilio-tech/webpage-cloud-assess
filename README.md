# Deploy instructions

## Local build
install dependencies
`npm i`

build static website 
`npm run build`

## SSH

You need an authorized key to access the server. As of now only resiliouser.ppk is able to access the server. @Mattia Torsello has a copy of that key and @François Parreaux has the original

Here's an example config to access the server
`~/.ssh/config`
```
Host cloud-assess.org
        HostName 45.83.106.142
        IdentityFile ~/.ssh/id_dsa
        IdentitiesOnly yes
        User resiliosolutionsuser
        Port 2282
```

Password for resiliosolutionuser can be shared by @Amael Parreaux on NC password manager.

## Deploy build on server

Once you have ssh configured, the password and built the project you can simply write this command:

`scp -r dist/* cloud-assess.org:/home/resiliosolutionsuser/web`

## TLDR

put a static website in /home/resiliosolutionuser/web
