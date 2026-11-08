"""Inicia um servidor local simples para abrir a cartinha no navegador."""

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from functools import partial
from pathlib import Path
from threading import Thread
import webbrowser

HOST = "127.0.0.1"
PORT = 8000


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        pass


if __name__ == "__main__":
    endereco = f"http://{HOST}:{PORT}"
    handler = partial(QuietHandler, directory=str(Path(__file__).resolve().parent))
    servidor = ThreadingHTTPServer((HOST, PORT), handler)
    print(f"Cartinha aberta em {endereco} — pressione Ctrl+C para encerrar.")
    webbrowser.open(endereco)
    try:
        servidor.serve_forever()
    except KeyboardInterrupt:
        servidor.shutdown()
