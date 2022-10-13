import sys
import paramiko

def connect_SSH():
    ssh = paramiko.SSHClient()
    
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect('sigma.ug.edu.pl',username='jwozniak',key_filename='/home/jwozniak/PSW/Lab01/SSH')

    stdin, stdout, stderr = ssh.exec_command('who -H')
    outlines = stdout.readlines()
    resp=''.join(outlines)
    print(resp)

connect_SSH()