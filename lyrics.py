import time

RED = "\033[91m"
RESET = "\033[0m"

chorus = """
At hahalik ka nang may lipstick na dugo,
Sa labi kong punong-puno ng panlasa ko sayo,
Kanibalismo, di ka matiis
Kapag inalis mo, ika'y mamimiss
Di nagmamalinis
O ika'y mamimiss
'Di ka matitiis
Tatlo na sais
Pag-ibig mong kay tamis
"""

for char in chorus:
    print(f"{RED}{char}{RESET}", end="", flush=True)
    time.sleep(0.03)
