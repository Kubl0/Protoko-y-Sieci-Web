import sys
import os
import paramiko

def connect_SSH():
    ssh = paramiko.SSHClient()
    
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect('sigma.ug.edu.pl',username='jwozniak',key_filename='C:/Users/jakub/.ssh/id_rsa')

    stdin, stdout, stderr = ssh.exec_command('who -H')
    outlines = stdout.readlines()
    resp=''.join(outlines)
    print('Zalogowani: ')
    print(resp)

    url = input("Podaj sciezke >> ")

    stdin, stdout, stderr = ssh.exec_command(f'test -f {url} && echo "y"')
    lines = stdout.readlines()

    if(lines==['y\n']):
        stdin, stdout, stderr = ssh.exec_command(f'cat {url}')
        print("Zawartosc pliku: " + str(stdout.readlines()))
    else:
        print("Nie istnieje")    
        print(stdout.readlines())

connect_SSH()