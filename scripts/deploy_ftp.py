import os
import sys
import ftplib
import argparse

def upload_directory(ftp, local_dir, remote_dir="."):
    if remote_dir != ".":
        try:
            ftp.mkd(remote_dir)
        except ftplib.error_perm:
            pass  # Directory probably already exists
        ftp.cwd(remote_dir)

    for item in os.listdir(local_dir):
        if item.startswith("."):
            continue
        local_path = os.path.join(local_dir, item)
        if os.path.isdir(local_path):
            print(f"Entering directory: {item}")
            try:
                ftp.mkd(item)
            except ftplib.error_perm:
                pass
            ftp.cwd(item)
            upload_directory(ftp, local_path, ".")
            ftp.cwd("..")
        else:
            print(f"Uploading: {item}")
            with open(local_path, "rb") as f:
                ftp.storbinary(f"STOR {item}", f)

def main():
    parser = argparse.ArgumentParser(description="FTP Deployer for Astro dist")
    parser.add_argument("--host", default=os.getenv("FTP_HOST", "54.37.224.8"))
    parser.add_argument("--port", type=int, default=int(os.getenv("FTP_PORT", "21")))
    parser.add_argument("--user", default=os.getenv("FTP_USER", "standarduser_devftp"))
    parser.add_argument("--password", default=os.getenv("FTP_PASS", "P}EU5KQ;uF"))
    parser.add_argument("--source", default=os.path.join(os.path.dirname(__file__), "..", "dist"))
    args = parser.parse_args()

    abs_source = os.path.abspath(args.source)
    if not os.path.exists(abs_source):
        print(f"Source directory not found: {abs_source}")
        sys.exit(1)

    print(f"Connecting to {args.host}:{args.port} as {args.user}...")
    try:
        ftp = ftplib.FTP()
        ftp.connect(args.host, args.port, timeout=15)
        ftp.login(args.user, args.password)
        ftp.set_pasv(True)
        print("Logged in successfully. Current working directory:", ftp.pwd())

        print(f"Uploading files from {abs_source}...")
        upload_directory(ftp, abs_source)
        ftp.quit()
        print("Deployment completed successfully!")
    except Exception as e:
        print(f"FTP Deployment failed: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
