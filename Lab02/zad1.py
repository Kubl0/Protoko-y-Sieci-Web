import pysftp

hostname = "sigma.ug.edu.pl"
username = "jwozniak"
password = "R0n4ldinh0@01"

with pysftp.Connection(host=hostname, username=username, password=password) as sftp:
    print("Połączono")
    wybor = input("Download(1) or Upload(0) >> ")
    if wybor=="1":
        url = input('Podaj sciezke pliku do pobrania >> ')
        local_path = 'C:/Users/jakub/Pulpit/_/PSW\Lab02/files/PLIK_SFTP_DOWNLOADED'
        sftp.get(url, local_path)

    elif wybor=="0":
        url = input('Podaj sciezke pliku do wyslania >> ')
        remote_path = '/home/jwozniak/SFTP/PLIK_SFTP_UPLOADED'
        sftp.put(url, remote_path)
        print("Sukces")

        sftp.chdir('SFTP')

        directory = sftp.listdir_attr()
        for attr in directory:
            print(attr.filename, attr)

    else:
        print("Zly wybor")
