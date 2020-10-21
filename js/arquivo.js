// 20201019135920
// https://dl.ioconvert.com/document/20201019165815efb2ad45fd824f4cbdf79dafa4502e75/relatorio-de-erros2e6eb018cb39094f61b29c538a3d1616.json

export default [
      {
        "NCDM": "Código Display",
        "__EMPTY": "Número",
        "__EMPTY_1": "Descrição",
        "__EMPTY_2": "Ação"
      },
      {
        "__EMPTY": 0,
        "__EMPTY_1": "Não existe nenhuma falha",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3",
        "__EMPTY": 0,
        "__EMPTY_1": "Erro de CHECKSUM da aplicação ",
        "__EMPTY_2": "Sustituir NCDM "
      },
      {
        "NCDM": "4",
        "__EMPTY": 0,
        "__EMPTY_1": "Erro na Pilha Guard Band",
        "__EMPTY_2": "Substituir NCDM "
      },
      {
        "NCDM": "5",
        "__EMPTY": 0,
        "__EMPTY_1": "Erro de RAM",
        "__EMPTY_2": "Substituir NCDM "
      },
      {
        "NCDM": "9",
        "__EMPTY": 0,
        "__EMPTY_1": "Erro de Plha",
        "__EMPTY_2": "Sustituir NCDM "
      },
      {
        "NCDM": "80",
        "__EMPTY": 0,
        "__EMPTY_1": "Erro de CHECKSUM na configuração não-vital (CED)",
        "__EMPTY_2": "Carregar uma nova configuração não-vital (CED) "
      },
      {
        "NCDM": "84",
        "__EMPTY": 0,
        "__EMPTY_1": "Erro do número de versão na configuração não-vital (CED)",
        "__EMPTY_2": "Verificar que a versão no bloco de microinterruptores CEDVER esteja bem configurada Se a configuração estiver correta, carregar uma nova configuração não-vital (CED) "
      },
      {
        "NCDM": "100",
        "__EMPTY": 0,
        "__EMPTY_1": "Erro de configuração",
        "__EMPTY_2": "Verificar os parâmetros de configuração do NCDM e corrigir os que se encontrem fora da margem\nGarantir que todas as sessões da porta B de rede com protocolo WSA/S2 possuem um único endereço de satélite para sessões de cliente e servidor\nGarantir que os parâmetros das portas de comunicação vital (configuradas para VLM6) coincidam com a configuração no CDM Reconfigurar o NCDM e carregar de novo no módulo NCDM "
      },
      {
        "NCDM": "101",
        "__EMPTY": 0,
        "__EMPTY_1": "Fora de memória",
        "__EMPTY_2": "Substituir NCDM "
      },
      {
        "NCDM": "102",
        "__EMPTY": 0,
        "__EMPTY_1": "Erro de operação do sistema",
        "__EMPTY_2": "Substituir NCDM "
      },
      {
        "NCDM": "103",
        "__EMPTY": 0,
        "__EMPTY_1": "Erro interno",
        "__EMPTY_2": "Substituir NCDM "
      },
      {
        "NCDM": "104",
        "__EMPTY": 0,
        "__EMPTY_1": "Tarefa suspensa",
        "__EMPTY_2": "Substituir NCDM "
      },
      {
        "NCDM": "105",
        "__EMPTY": 0,
        "__EMPTY_1": "Erro da NVRAM",
        "__EMPTY_2": "Substituir NCDM "
      },
      {
        "NCDM": "107",
        "__EMPTY": 0,
        "__EMPTY_1": "Erro no buffer de comunicações",
        "__EMPTY_2": "Substituir NCDM "
      },
      {
        "NCDM": "108",
        "__EMPTY": 0,
        "__EMPTY_1": "Erro do formato de versão da configuração não-vital (CED)",
        "__EMPTY_2": "Carregar uma nova configuração não-vital (CED) "
      },
      {
        "NCDM": "109",
        "__EMPTY": 0,
        "__EMPTY_1": "Reinicio de Watchdog",
        "__EMPTY_2": "Substituir NCDM "
      },
      {
        "NCDM": "10A",
        "__EMPTY": 0,
        "__EMPTY_1": "Não é copiada a configuração não-vital (CED) no VLM6",
        "__EMPTY_2": "Reiniciar o sistema WESTRACE "
      },
      {
        "NCDM": "10B",
        "__EMPTY": 0,
        "__EMPTY_1": "Cópia incorreta da configuração não-vital (CED) no VLM6",
        "__EMPTY_2": "Reiniciar o sistema WESTRACE "
      },
      {
        "NCDM": "10C",
        "__EMPTY": 0,
        "__EMPTY_1": "Versões da interface com o VLM6 incorretas",
        "__EMPTY_2": "Verificar as versões da configuração não-vital (CED) no NCDM e VLM6 "
      },
      {
        "NCDM": "10D",
        "__EMPTY": 0,
        "__EMPTY_1": "Endereço incorreto do VLM6",
        "__EMPTY_2": "Verificar a configuração não-vital (CED) do NCDM e detalhes da instalação WESTRACE "
      },
      {
        "NCDM": "10E",
        "__EMPTY": 0,
        "__EMPTY_1": "Erro de dados no IMB",
        "__EMPTY_2": "Nenhuma "
      },
      {
        "NCDM": "10F",
        "__EMPTY": 0,
        "__EMPTY_1": "Ranhura incorreta no IMB",
        "__EMPTY_2": "Colocar o módulo NCDM na ranhura correta "
      },
      {
        "NCDM": "111",
        "__EMPTY": 0,
        "__EMPTY_1": "Erro de tempos",
        "__EMPTY_2": "Nenhuma "
      },
      {
        "NCDM": "112",
        "__EMPTY": 0,
        "__EMPTY_1": "Endereço IP duplicado",
        "__EMPTY_2": "Verificar a configuração não-vital (CED) do NCDM e certificar-se de que os endereços IP estejam corretos\nVerificar a conexão de outros equipamentos na rede para detectar endereços IP duplicados Em um sistema modo Hot stand-by:\nVerificar que o endereço IP secundário esteja corretamente configurado nos microinterruptores do módulo NCDM"
      },
      {
        "NCDM": "113",
        "__EMPTY": 0,
        "__EMPTY_1": "Número de sessão duplicada",
        "__EMPTY_2": "Verificar que as sessões de rede sejam únicas\nVerificar que os endereços das portas de diagnóstico sejam únicas e diferentes Corrigir, reconfigurar e carregar de novo a configuração do NCDM onde seja necessário "
      },
      {
        "NCDM": "800",
        "__EMPTY": 0,
        "__EMPTY_1": "O NVRAM não está correto",
        "__EMPTY_2": "Pode ser provocado por uma falha na bateria \nSubstituir a bateria se o erro persistir na partida, de todos modos substituir o NCDC \nNota: A memória NVRAM é apagada sempre que for configurado ou reconfigurado o módulo NCDM "
      },
      {
        "NCDM": "801",
        "__EMPTY": 0,
        "__EMPTY_1": "O registro de dados não é válido e reinicia",
        "__EMPTY_2": "Pode ser provocado por uma falha na bateria \nSubstituir a bateria se o erro persistir na partida, de todos modos substituir o NCDC \nNota: A memória NVRAM é apagada sempre que for configurado ou reconfigurado o módulo NCDM "
      },
      {
        "NCDM": "802",
        "__EMPTY": 0,
        "__EMPTY_1": "O registro de falhas não é válido e reinicia",
        "__EMPTY_2": "Pode ser provocado por uma falha na bateria \nSubstituir a bateria se o erro persistir na partida, de todos modos substituir o NCDC \nNota: A memória NVRAM é apagada sempre que for configurado ou reconfigurado o módulo NCDM "
      },
      {
        "NCDM": "803",
        "__EMPTY": 0,
        "__EMPTY_1": "O registro de operações não é válido e reinicia",
        "__EMPTY_2": "Pode ser provocado por uma falha na bateria \nSubstituir a bateria se o erro persistir na partida, de todos modos substituir o NCDC \nNota: A memória NVRAM é apagada sempre que for configurado ou reconfigurado o módulo NCDM "
      },
      {
        "NCDM": "804",
        "__EMPTY": 0,
        "__EMPTY_1": "Os estados de saídas SR Latch na NVRAM não estão corretos",
        "__EMPTY_2": "Pode ser provocado por uma falha na bateria \nSubstituir a bateria se o erro persistir na partida, de todos modos substituir o NCDC \nNota: A memória NVRAM é apagada sempre que for configurado ou reconfigurado o módulo NCDM "
      },
      {
        "NCDM": "805",
        "__EMPTY": 0,
        "__EMPTY_1": "Os números de telefones na NVRAM não estão corretos",
        "__EMPTY_2": "Pode ser provocado por uma falha na bateria \nSubstituir a bateria se o erro persistir na partida, de todos modos substituir o NCDC \nNota: A memória NVRAM é apagada sempre que for configurado ou reconfigurado o módulo NCDM "
      },
      {
        "NCDM": "806",
        "__EMPTY": 0,
        "__EMPTY_1": "As senhas no NVRAM não estão corretas",
        "__EMPTY_2": "Pode ser provocado por uma falha na bateria \nSubstituir a bateria se o erro persistir na partida, de todos modos substituir o NCDC \nNota: A memória NVRAM é apagada sempre que for configurado ou reconfigurado o módulo NCDM "
      },
      {
        "NCDM": "810",
        "__EMPTY": 0,
        "__EMPTY_1": "Erro de leitura do bus ou lendo o endereço do backplane. (erro de leitura FDet)",
        "__EMPTY_2": "Verificar que todos os cartões estejam em sua rahnura e se a falha persistir, substituir o NCDM "
      },
      {
        "NCDM": "900",
        "__EMPTY": 0,
        "__EMPTY_1": "Comprimento da mensagem vital ou número da porta do canal é pequeno e fora da faixa para mensagens ao VLM6",
        "__EMPTY_2": "Verificar a configuração das sessões vitais na porta de rede "
      },
      {
        "NCDM": "901",
        "__EMPTY": 0,
        "__EMPTY_1": "BCC incorreto em mensagens não vitais do VLM6",
        "__EMPTY_2": "Verificar a configuração da interface com o VLM6 "
      },
      {
        "NCDM": "902",
        "__EMPTY": 0,
        "__EMPTY_1": "Comprimento da mensagem do canal é grande e fora da faixa para mensagens do VLM6",
        "__EMPTY_2": "Verificar a configuração da interface com o VLM6 "
      },
      {
        "NCDM": "903",
        "__EMPTY": 0,
        "__EMPTY_1": "O NCDM pode não conseguir o acesso DPRAM",
        "__EMPTY_2": "Verificar a interface VLM6 - NCDM"
      },
      {
        "NCDM": "904",
        "__EMPTY": 0,
        "__EMPTY_1": "Erro na porta INCL de fibra óptica do Hot Stand-by",
        "__EMPTY_2": "Verificar o hardware INCL. \nCertificar-se de que ambos módulos NCDM tenham a mesma configuração "
      },
      {
        "NCDM": "90C",
        "__EMPTY": 0,
        "__EMPTY_1": "Número de sessão incorreto",
        "__EMPTY_2": "Certificar-se de que seja utilizada a mesma sessão ID para a conexão de instalações "
      },
      {
        "NCDM": "90D",
        "__EMPTY": 0,
        "__EMPTY_1": "Mensagem atrasada",
        "__EMPTY_2": "Verificar o hardware de rede"
      },
      {
        "NCDM": "90E",
        "__EMPTY": 0,
        "__EMPTY_1": "Mensagem repetida ou recebida muito cedo",
        "__EMPTY_2": "Verificar o hardware de rede "
      },
      {
        "NCDM": "90F",
        "__EMPTY": 0,
        "__EMPTY_1": "Sessão ocupada",
        "__EMPTY_2": "Verificar os equipamentos ligados na rede. Garantir que somente uma instalação remota se encontre ligada em algum momento (para a mesma porta ID) "
      },
      {
        "NCDM": "910",
        "__EMPTY": 0,
        "__EMPTY_1": "Sessão ou endereço IP modificado",
        "__EMPTY_2": "Não requer nenhuma ação "
      },
      {
        "NCDM": "911",
        "__EMPTY": 0,
        "__EMPTY_1": "Intervalo de tempo de Rx incorreto",
        "__EMPTY_2": "Verificar o hardware de rede "
      },
      {
        "NCDM": "F00",
        "__EMPTY": 0,
        "__EMPTY_1": "Restablecida a condição do nível de bateria baixo",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "F01",
        "__EMPTY": 0,
        "__EMPTY_1": "Nível de batería baixo (corresponde a mensagem \"BAT\" no display alfanumérico)",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "F10",
        "__EMPTY": 0,
        "__EMPTY_1": "Restablecido o erro de falta de sincronismo com VLM6",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "F11",
        "__EMPTY": 0,
        "__EMPTY_1": "Tempo do ciclo principal não sincronizado (O módulo NCDM não pode se manter atualizado com o VLM6)",
        "__EMPTY_2": "Verificar os dados da configuração não-vital (CED) nos NCDM e VLM6 "
      },
      {
        "NCDM": "F21",
        "__EMPTY": 0,
        "__EMPTY_1": "Número da versão do software perdido",
        "__EMPTY_2": "Substituir NCDM "
      },
      {
        "NCDM": "F22",
        "__EMPTY": 0,
        "__EMPTY_1": "Erro de informação de módulos",
        "__EMPTY_2": "Substituir NCDM "
      },
      {
        "NCDM": "F23",
        "__EMPTY": 0,
        "__EMPTY_1": "Erro de falha do BUS",
        "__EMPTY_2": "Substituir NCDM "
      },
      {
        "NCDM": "F24",
        "__EMPTY": 0,
        "__EMPTY_1": "Erro de detecção de falha no NVRAM",
        "__EMPTY_2": "Substituir NCDM "
      },
      {
        "NCDM": "F30",
        "__EMPTY": 0,
        "__EMPTY_1": "A configuração de data/hora foi configurada, por exemplo quando uma data/hora incorreta tenha sido corrigida",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "F31",
        "__EMPTY": 0,
        "__EMPTY_1": "Data/hora não configurada (corresponde a mensagem \"TIME\" no display alfanumérico)",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "F40",
        "__EMPTY": 0,
        "__EMPTY_1": "Porta de rede reativada",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "F41",
        "__EMPTY": 0,
        "__EMPTY_1": "Porta de rede deshabilitada",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "F50",
        "__EMPTY": 0,
        "__EMPTY_1": "Conexão vital conectada",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "F51",
        "__EMPTY": 0,
        "__EMPTY_1": "Conexão vital desconectada",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2000",
        "__EMPTY": 0,
        "__EMPTY_1": "Porta serial 2 foi recuperada e se encontra operativa. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma "
      },
      {
        "NCDM": "2001",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha no tempo de espera da porta serial 2 ou tempo finalizado:\nTempo de espera finalizado para  recepção de uma mensagem de entrada (porta serial 2 servidor).\nFalha em conseguir uma resposta de qualquier servidor externo (porta serial 2 cliente).",
        "__EMPTY_2": "LED de Rx da porta serial 2 piscando:\n  Comprovar a configuração da porta serial 2 na configuração não vital (CED).\n  Substituir o módulo NCDM se a configuração CED estiver correta.\nLED de Rx da porta serial 2 apagado:\n  Comprovar as conexões externas da porta serial 2.\n  Substituir o módulo de proteção PFM ou o módulo NCDM."
      },
      {
        "NCDM": "2008",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite 0 da porta serial 2 recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2009,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite 0 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite 0.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite 0.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertifique-se de que o sistema mestre esteja enviando os dados ao satélite 0.\nVerifique os satélites armazenados nos dados de configuração não-vital (CED) e veja se estão corretos.\nPorta serial 2 mestre:\nCertifique-se de que o sistema escravo funciona corretamente no satélite 0.\nVerifique os satélites armazenados nos dados de configuração não-vital (CED) e veja se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2018,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 1 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2019,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 1 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 1.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 1.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 1.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 1.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2028,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 2 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2029,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 2 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 2.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 2.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 2.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 2.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2038,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 3 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2039,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 3 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 3.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 3.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 3.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 3.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2048,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 4 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2049,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 4 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 4.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 4.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 4.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 4.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2058,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 5 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2059,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 5 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 5.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 5.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 5.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 5.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2068,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 6 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2069,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 6 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 6.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 6.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 6.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 6.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2078,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 7 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2079,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 7 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 7.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 7.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 7.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 7.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2088,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 8 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2089,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 8 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 8.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 8.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 8.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 8.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2098,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 9 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2099,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 9 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 9.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 9.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 9.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 9.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "20A8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 10 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "20A9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 10 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 10.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 10.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 10.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 10.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "20B8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 11 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "20B9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 11 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 11.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 11.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 11.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 11.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "20C8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 12 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "20C9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 12 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 12.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 12.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 12.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 12.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "20D8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 13 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "20D9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 13 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 13.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 13.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 13.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 13.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "20E8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 14 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "20E9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 14 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 14.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 14.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 14.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 14.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "20F8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 15 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "20F9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 15 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 15.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 15.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 15.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 15.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2108,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 16 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2109,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 16 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 16.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 16.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 16.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 16.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2118,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 17 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2119,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 17 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 17.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 17.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 17.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 17.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2128,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 18 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2129,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 18 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 18.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 18.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 18.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 18.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2138,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 19 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2139,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 19 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 19.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 19.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 19.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 19.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2148,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 20 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2149,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 20 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 20.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 20.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 20.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 20.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2158,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 21 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2159,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 21 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 21.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 21.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 21.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 21.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2168,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 22 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2169,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 22 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 22.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 22.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 22.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 22.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2178,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 23 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2179,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 23 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 23.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 23.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 23.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 23.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2188,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 24 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2189,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 24 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 24.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 24.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 24.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 24.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2198,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 25 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2199,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 25 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 25.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 25.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 25.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 25.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "21A8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 26 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "21A9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 26 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 26.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 26.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 26.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 26.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "21B8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 27 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "21B9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 27 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 27.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 27.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 27.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 27.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "21C8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 28 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "21C9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 28 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 28.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 28.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 28.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 28.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "21D8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 29 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "21D9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 29 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 29.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 29.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 29.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 29.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "21E8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 30 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "21E9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 30 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 30.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 30.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 30.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 30.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "21F8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 31 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "21F9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 31 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 31.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 31.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 31.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 31.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2208,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 32 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2209,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 32 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 32.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 32.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 32.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 32.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2218,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 33 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2219,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 33 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 33.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 33.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 33.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 33.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2228,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 34 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2229,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 34 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 34.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 34.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 34.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 34.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2238,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 35 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2239,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 35 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 35.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 35.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 35.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 35.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2248,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 36 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2249,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 36 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 36.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 36.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 36.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 36.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2258,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 37 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2259,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 37 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 37.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 37.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 37.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 37.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2268,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 38 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2269,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 38 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 38.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 38.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 38.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 38.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2278,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 39 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2279,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 39 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 39.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 39.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 39.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 39.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2288,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 40 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2289,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 40 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 40.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 40.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 40.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 40.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2298,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 41 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2299,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 41 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 41.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 41.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 41.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 41.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "22A8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 42 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "22A9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 42 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 42.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 42.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 42.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 42.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "22B8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 43 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "22B9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 43 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 43.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 43.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 43.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 43.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "22C8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 44 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "22C9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 44 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 44.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 44.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 44.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 44.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "22D8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 45 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "22D9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 45 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 45.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 45.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 45.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 45.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "22E8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 46 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "22E9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 46 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 46.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 46.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 46.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 46.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "22F8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 47 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "22F9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 47 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 47.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 47.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 47.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 47.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2308,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 48 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2309,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 48 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 48.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 48.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 48.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 48.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2318,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 49 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2319,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 49 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 49.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 49.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 49.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 49.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2328,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 50 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2329,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 50 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 50.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 50.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 50.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 50.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2338,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 51 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2339,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 51 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 51.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 51.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 51.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 51.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2348,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 52 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2349,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 52 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 52.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 52.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 52.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 52.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2358,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 53 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2359,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 53 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 53.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 53.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 53.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 53.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2368,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 54 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2369,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 54 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 54.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 54.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 54.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 54.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2378,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 55 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2379,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 55 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 55.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 55.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 55.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 55.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2388,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 56 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2389,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 56 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 56.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 56.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 56.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 56.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2398,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 57 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2399,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 57 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 57.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 57.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 57.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 57.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "23A8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 58 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "23A9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 58 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 58.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 58.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 58.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 58.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "23B8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 59 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "23B9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 59 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 59.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 59.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 59.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 59.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "23C8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 60 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "23C9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 60 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 60.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 60.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 60.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 60.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "23D8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 61 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "23D9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 61 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 61.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 61.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 61.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 61.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "23E8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 62 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "23E9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 62 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 62.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 62.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 62.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 62.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "23F8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 63 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "23F9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 63 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 63.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 63.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 63.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 63.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2808,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite 0 da porta serial 2 recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2809,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite 0 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite 0.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite 0.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertifique-se de que o sistema mestre esteja enviando os dados ao satélite 0.\nVerifique os satélites armazenados nos dados de configuração não-vital (CED) e veja se estão corretos.\nPorta serial 2 mestre:\nCertifique-se de que o sistema escravo funciona corretamente no satélite 0.\nVerifique os satélites armazenados nos dados de configuração não-vital (CED) e veja se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2818,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 1 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2819,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 1 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 1.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 1.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 1.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 1.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2828,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 2 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2829,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 2 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 2.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 2.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 2.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 2.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2838,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 3 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2839,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 3 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 3.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 3.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 3.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 3.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2848,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 4 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2849,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 4 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 4.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 4.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 4.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 4.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2858,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 5 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2859,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 5 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 5.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 5.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 5.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 5.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2868,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 6 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2869,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 6 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 6.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 6.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 6.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 6.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2878,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 7 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2879,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 7 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 7.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 7.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 7.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 7.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2888,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 8 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2889,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 8 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 8.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 8.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 8.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 8.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2898,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 9 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2899,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 9 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 9.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 9.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 9.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 9.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "28A8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 10 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "28A9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 10 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 10.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 10.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 10.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 10.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "28B8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 11 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "28B9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 11 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 11.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 11.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 11.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 11.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "28C8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 12 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "28C9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 12 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 12.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 12.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 12.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 12.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "28D8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 13 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "28D9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 13 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 13.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 13.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 13.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 13.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "28E8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 14 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "28E9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 14 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 14.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 14.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 14.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 14.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "28F8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 15 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "28F9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 15 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 15.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 15.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 15.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 15.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2908,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 16 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2909,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 16 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 16.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 16.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 16.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 16.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2918,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 17 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2919,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 17 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 17.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 17.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 17.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 17.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2928,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 18 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2929,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 18 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 18.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 18.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 18.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 18.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2938,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 19 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2939,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 19 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 19.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 19.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 19.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 19.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2948,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 20 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2949,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 20 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 20.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 20.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 20.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 20.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2958,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 21 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2959,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 21 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 21.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 21.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 21.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 21.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2968,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 22 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2969,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 22 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 22.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 22.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 22.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 22.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2978,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 23 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2979,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 23 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 23.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 23.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 23.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 23.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2988,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 24 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2989,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 24 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 24.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 24.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 24.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 24.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 2998,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 25 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 2999,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 25 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 25.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 25.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 25.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 25.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "29A8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 26 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "29A9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 26 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 26.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 26.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 26.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 26.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "29B8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 27 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "29B9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 27 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 27.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 27.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 27.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 27.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "29C8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 28 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "29C9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 28 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 28.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 28.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 28.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 28.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "29D8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 29 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "29D9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 29 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 29.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 29.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 29.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 29.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "29E8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 30 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "29E9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 30 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 30.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 30.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 30.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 30.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "29F8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 31 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "29F9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 31 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 31.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 31.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 31.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 31.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2A08",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 32 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2A09",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 32 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 32.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 32.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 32.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 32.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2A18",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 33 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2A19",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 33 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 33.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 33.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 33.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 33.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2A28",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 34 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2A29",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 34 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 34.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 34.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 34.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 34.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2A38",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 35 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2A39",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 35 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 35.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 35.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 35.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 35.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2A48",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 36 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2A49",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 36 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 36.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 36.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 36.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 36.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2A58",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 37 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2A59",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 37 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 37.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 37.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 37.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 37.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2A68",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 38 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2A69",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 38 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 38.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 38.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 38.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 38.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2A78",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 39 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2A79",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 39 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 39.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 39.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 39.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 39.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2A88",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 40 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2A89",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 40 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 40.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 40.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 40.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 40.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2A98",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 41 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2A99",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 41 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 41.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 41.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 41.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 41.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2AA8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 42 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2AA9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 42 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 42.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 42.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 42.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 42.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2AB8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 43 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2AB9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 43 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 43.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 43.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 43.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 43.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2AC8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 44 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2AC9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 44 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 44.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 44.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 44.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 44.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2AD8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 45 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2AD9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 45 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 45.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 45.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 45.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 45.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2AE8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 46 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2AE9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 46 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 46.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 46.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 46.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 46.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2AF8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 47 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2AF9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 47 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 47.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 47.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 47.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 47.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2B08",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 48 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2B09",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 48 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 48.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 48.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 48.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 48.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2B18",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 49 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2B19",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 49 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 49.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 49.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 49.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 49.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2B28",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 50 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2B29",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 50 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 50.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 50.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 50.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 50.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2B38",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 51 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2B39",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 51 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 51.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 51.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 51.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 51.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2B48",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 52 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2B49",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 52 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 52.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 52.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 52.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 52.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2B58",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 53 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2B59",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 53 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 53.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 53.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 53.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 53.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2B68",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 54 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2B69",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 54 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 54.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 54.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 54.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 54.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2B78",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 55 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2B79",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 55 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 55.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 55.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 55.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 55.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2B88",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 56 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2B89",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 56 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 56.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 56.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 56.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 56.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2B98",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 57 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2B99",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 57 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 57.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 57.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 57.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 57.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2BA8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 58 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2BA9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 58 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 58.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 58.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 58.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 58.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2BB8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 59 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2BB9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 59 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 59.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 59.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 59.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 59.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2BC8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 60 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2BC9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 60 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 60.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 60.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 60.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 60.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2BD8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 61 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2BD9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 61 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 61.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 61.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 61.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 61.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2BE8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 62 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2BE9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 62 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 62.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 62.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 62.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 62.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "2BF8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 63 da porta serial 2 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "2BF9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 63 na porta serial 2:\nPorta serial 2 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 63.\nPorta serial 2 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 63.",
        "__EMPTY_2": "Porta serial 2 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 63.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 2 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 63.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3000",
        "__EMPTY": 0,
        "__EMPTY_1": "Porta serial 3 foi recuperada e se encontra operativa Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma "
      },
      {
        "NCDM": "3001",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha no tempo de espera da porta serial 3 ou tempo finalizado:\nTempo de espera finalizado para  recepção de uma mensagem de entrada (porta serial 3 servidor).\nFalha em conseguir uma resposta de qualquier servidor externo (porta serial 3 cliente).",
        "__EMPTY_2": "LED de Rx da porta serial 3 piscando:\n  Comprovar a configuração da porta serial 3 na configuração não vital (CED).\n  Substituir o módulo NCDM se a configuração CED estiver correta.\nLED de Rx da porta serial 3 apagado:\n  Comprovar as conexões externas da porta serial 3.\n  Substituir o módulo de proteção PFM ou o módulo NCDM."
      },
      {
        "NCDM": 3008,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite 0 da porta serial 3 recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3009,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite 0 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite 0.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite 0.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertifique-se de que o sistema mestre esteja enviando os dados ao satélite 0.\nVerifique os satélites armazenados nos dados de configuração não-vital (CED) e veja se estão corretos.\nPorta serial 3 mestre:\nCertifique-se de que o sistema escravo funciona corretamente no satélite 0.\nVerifique os satélites armazenados nos dados de configuração não-vital (CED) e veja se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3018,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 1 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3019,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 1 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 1.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 1.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 1.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 1.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3028,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 2 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3029,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 2 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 2.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 2.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 2.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 2.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3038,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 3 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3039,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 3 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 3.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 3.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 3.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 3.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3048,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 4 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3049,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 4 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 4.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 4.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 4.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 4.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3058,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 5 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3059,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 5 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 5.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 5.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 5.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 5.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3068,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 6 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3069,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 6 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 6.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 6.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 6.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 6.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3078,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 7 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3079,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 7 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 7.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 7.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 7.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 7.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3088,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 8 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3089,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 8 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 8.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 8.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 8.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 8.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3098,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 9 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3099,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 9 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 9.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 9.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 9.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 9.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "30A8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 10 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "30A9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 10 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 10.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 10.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 10.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 10.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "30B8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 11 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "30B9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 11 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 11.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 11.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 11.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 11.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "30C8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 12 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "30C9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 12 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 12.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 12.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 12.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 12.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "30D8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 13 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "30D9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 13 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 13.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 13.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 13.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 13.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "30E8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 14 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "30E9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 14 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 14.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 14.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 14.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 14.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "30F8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 15 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "30F9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 15 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 15.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 15.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 15.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 15.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3108,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 16 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3109,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 16 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 16.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 16.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 16.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 16.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3118,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 17 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3119,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 17 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 17.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 17.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 17.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 17.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3128,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 18 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3129,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 18 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 18.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 18.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 18.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 18.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3138,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 19 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3139,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 19 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 19.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 19.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 19.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 19.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3148,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 20 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3149,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 20 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 20.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 20.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 20.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 20.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3158,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 21 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3159,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 21 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 21.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 21.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 21.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 21.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3168,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 22 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3169,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 22 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 22.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 22.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 22.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 22.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3178,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 23 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3179,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 23 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 23.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 23.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 23.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 23.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3188,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 24 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3189,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 24 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 24.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 24.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 24.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 24.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3198,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 25 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3199,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 25 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 25.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 25.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 25.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 25.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "31A8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 26 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "31A9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 26 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 26.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 26.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 26.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 26.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "31B8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 27 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "31B9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 27 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 27.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 27.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 27.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 27.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "31C8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 28 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "31C9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 28 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 28.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 28.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 28.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 28.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "31D8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 29 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "31D9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 29 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 29.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 29.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 29.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 29.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "31E8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 30 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "31E9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 30 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 30.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 30.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 30.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 30.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "31F8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 31 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "31F9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 31 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 31.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 31.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 31.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 31.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3208,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 32 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3209,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 32 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 32.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 32.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 32.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 32.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3218,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 33 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3219,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 33 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 33.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 33.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 33.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 33.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3228,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 34 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3229,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 34 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 34.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 34.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 34.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 34.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3238,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 35 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3239,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 35 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 35.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 35.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 35.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 35.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3248,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 36 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3249,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 36 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 36.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 36.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 36.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 36.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3258,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 37 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3259,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 37 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 37.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 37.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 37.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 37.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3268,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 38 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3269,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 38 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 38.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 38.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 38.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 38.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3278,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 39 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3279,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 39 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 39.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 39.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 39.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 39.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3288,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 40 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3289,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 40 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 40.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 40.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 40.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 40.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3298,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 41 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3299,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 41 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 41.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 41.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 41.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 41.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "32A8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 42 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "32A9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 42 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 42.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 42.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 42.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 42.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "32B8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 43 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "32B9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 43 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 43.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 43.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 43.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 43.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "32C8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 44 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "32C9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 44 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 44.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 44.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 44.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 44.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "32D8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 45 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "32D9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 45 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 45.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 45.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 45.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 45.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "32E8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 46 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "32E9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 46 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 46.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 46.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 46.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 46.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "32F8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 47 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "32F9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 47 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 47.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 47.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 47.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 47.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3308,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 48 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3309,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 48 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 48.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 48.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 48.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 48.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3318,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 49 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3319,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 49 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 49.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 49.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 49.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 49.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3328,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 50 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3329,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 50 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 50.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 50.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 50.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 50.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3338,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 51 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3339,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 51 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 51.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 51.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 51.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 51.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3348,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 52 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3349,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 52 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 52.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 52.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 52.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 52.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3358,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 53 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3359,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 53 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 53.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 53.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 53.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 53.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3368,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 54 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3369,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 54 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 54.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 54.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 54.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 54.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3378,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 55 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3379,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 55 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 55.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 55.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 55.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 55.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3388,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 56 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3389,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 56 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 56.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 56.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 56.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 56.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3398,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 57 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3399,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 57 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 57.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 57.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 57.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 57.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "33A8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 58 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "33A9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 58 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 58.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 58.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 58.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 58.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "33B8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 59 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "33B9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 59 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 59.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 59.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 59.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 59.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "33C8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 60 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "33C9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 60 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 60.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 60.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 60.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 60.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "33D8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 61 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "33D9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 61 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 61.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 61.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 61.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 61.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "33E8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 62 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "33E9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 62 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 62.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 62.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 62.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 62.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "33F8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 63 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "33F9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 63 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 63.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 63.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 63.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 63.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3808,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite 0 da porta serial 3 recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3809,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite 0 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite 0.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite 0.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertifique-se de que o sistema mestre esteja enviando os dados ao satélite 0.\nVerifique os satélites armazenados nos dados de configuração não-vital (CED) e veja se estão corretos.\nPorta serial 3 mestre:\nCertifique-se de que o sistema escravo funciona corretamente no satélite 0.\nVerifique os satélites armazenados nos dados de configuração não-vital (CED) e veja se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3818,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 1 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3819,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 1 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 1.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 1.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 1.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 1.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3828,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 2 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3829,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 2 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 2.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 2.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 2.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 2.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3839,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 3 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 3.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 3.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 3.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 3.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3848,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 4 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3849,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 4 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 4.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 4.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 4.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 4.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3858,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 5 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3859,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 5 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 5.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 5.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 5.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 5.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3868,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 6 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3869,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 6 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 6.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 6.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 6.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 6.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3878,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 7 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3879,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 7 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 7.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 7.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 7.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 7.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3888,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 8 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3889,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 8 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 8.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 8.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 8.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 8.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3898,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 9 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3899,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 9 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 9.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 9.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 9.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 9.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "38A8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 10 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "38A9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 10 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 10.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 10.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 10.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 10.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "38B8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 11 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "38B9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 11 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 11.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 11.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 11.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 11.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "38C8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 12 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "38C9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 12 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 12.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 12.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 12.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 12.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "38D8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 13 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "38D9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 13 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 13.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 13.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 13.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 13.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "38E8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 14 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "38E9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 14 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 14.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 14.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 14.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 14.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "38F8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 15 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "38F9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 15 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 15.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 15.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 15.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 15.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3908,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 16 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3909,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 16 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 16.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 16.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 16.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 16.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3918,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 17 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3919,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 17 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 17.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 17.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 17.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 17.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3928,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 18 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3929,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 18 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 18.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 18.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 18.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 18.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3938,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 19 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3939,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 19 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 19.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 19.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 19.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 19.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3948,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 20 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3949,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 20 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 20.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 20.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 20.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 20.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3958,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 21 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3959,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 21 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 21.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 21.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 21.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 21.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3968,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 22 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3969,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 22 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 22.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 22.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 22.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 22.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3978,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 23 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3979,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 23 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 23.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 23.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 23.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 23.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3988,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 24 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3989,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 24 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 24.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 24.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 24.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 24.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3998,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 25 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": 3999,
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 25 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 25.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 25.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 25.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 25.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "39A8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 26 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "39A9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 26 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 26.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 26.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 26.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 26.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "39B8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 27 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "39B9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 27 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 27.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 27.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 27.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 27.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "39C8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 28 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "39C9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 28 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 28.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 28.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 28.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 28.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "39D8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 29 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "39D9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 29 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 29.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 29.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 29.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 29.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "39E8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 30 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "39E9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 30 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 30.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 30.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 30.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 30.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "39F8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 31 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "39F9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 31 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 31.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 31.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 31.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 31.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3A08",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 32 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3A09",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 32 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 32.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 32.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 32.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 32.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3A18",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 33 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3A19",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 33 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 33.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 33.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 33.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 33.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3A28",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 34 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3A29",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 34 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 34.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 34.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 34.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 34.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3A38",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 35 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3A39",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 35 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 35.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 35.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 35.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 35.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3A48",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 36 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3A49",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 36 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 36.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 36.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 36.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 36.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3A58",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 37 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3A59",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 37 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 37.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 37.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 37.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 37.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3A68",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 38 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3A69",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 38 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 38.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 38.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 38.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 38.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3A78",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 39 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3A79",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 39 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 39.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 39.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 39.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 39.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3A88",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 40 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3A89",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 40 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 40.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 40.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 40.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 40.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3A98",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 41 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3A99",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 41 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 41.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 41.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 41.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 41.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3AA8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 42 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3AA9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 42 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 42.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 42.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 42.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 42.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3AB8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 43 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3AB9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 43 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 43.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 43.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 43.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 43.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3AC8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 44 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3AC9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 44 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 44.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 44.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 44.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 44.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3AD8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 45 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3AD9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 45 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 45.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 45.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 45.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 45.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3AE8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 46 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3AE9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 46 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 46.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 46.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 46.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 46.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3AF8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 47 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3AF9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 47 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 47.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 47.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 47.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 47.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3B08",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 48 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3B09",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 48 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 48.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 48.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 48.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 48.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3B18",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 49 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3B19",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 49 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 49.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 49.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 49.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 49.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3B28",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 50 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3B29",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 50 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 50.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 50.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 50.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 50.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3B38",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 51 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3B39",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 51 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 51.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 51.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 51.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 51.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3B48",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 52 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3B49",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 52 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 52.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 52.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 52.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 52.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3B58",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 53 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3B59",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 53 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 53.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 53.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 53.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 53.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3B68",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 54 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3B69",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 54 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 54.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 54.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 54.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 54.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3B78",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 55 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3B79",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 55 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 55.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 55.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 55.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 55.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3B88",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 56 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3B89",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 56 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 56.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 56.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 56.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 56.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3B98",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 57 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3B99",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 57 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 57.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 57.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 57.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 57.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3BA8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 58 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3BA9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 58 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 58.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 58.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 58.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 58.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3BB8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 59 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3BB9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 59 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 59.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 59.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 59.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 59.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3BC8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 60 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3BC9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 60 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 60.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 60.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 60.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 60.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3BD8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 61 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3BD9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 61 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 61.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 61.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 61.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 61.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3BE8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 62 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3BE9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 62 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 62.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 62.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 62.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 62.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "3BF8",
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 63 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "3BF9",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha de comunicação com o satélite ou módulo 63 na porta serial 3:\nPorta serial 3 escravo: Decorrido o tempo de espera por uma mensagem válida, na comunicação com o satélite ou módulo 63.\nPorta serial 3 mestre: Decorrido o tempo de espera por uma resposta, na comunicação com o satélite ou módulo 63.",
        "__EMPTY_2": "Porta serial 3 escravo:\nCertificar-se de que o sistema mestre esteja enviando dados ao satélite ou módulo 63.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta serial 3 mestre:\nCertificar-se de que o sistema escravo funciona corretamente no satélite ou módulo 63.\nVerificar os satélites ou módulos armazenados nos dados de configuração não-vital (CED) e verificar se coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": 3838,
        "__EMPTY": 0,
        "__EMPTY_1": "O satélite ou módulo 3 da porta serial 3 recuperou-se de uma falha e já está operacional Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "8000",
        "__EMPTY": 0,
        "__EMPTY_1": "Porta com IMB foi recuperado e se encontra operativo. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma "
      },
      {
        "NCDM": "8001",
        "__EMPTY": 0,
        "__EMPTY_1": "Tempo de espera finalizado com VLM6 na porta interna 8.",
        "__EMPTY_2": "Este código aparece quando o VLM6 se interrompe por alguma razão.\nTente o seguinte caso este código apareça e o sistema não se interrompa:\na) Reinicie o sistema WESTRACE.\nb) Assegure-se que a configuração não-vital (CED) entre VLM6 e o NCDM é consistente com relação aos estados que se transferem entre eles. O GCSS realiza esta comprovação.\nc) Comprove que somente está instalado um NCDM no sistema e não existe outro módulo DM instalado.\nd) Substitua o módulo NCDM."
      },
      {
        "NCDM": "9000",
        "__EMPTY": 0,
        "__EMPTY_1": "Porta de INCL foi recuperada e se encontra operativo. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma "
      },
      {
        "NCDM": "9001",
        "__EMPTY": 0,
        "__EMPTY_1": "Tempo de espera de fibra óptica finalizado na porta INCL.",
        "__EMPTY_2": "O módulo NCDM em modo de funcionamento on-line mostra este código quando não recebe mensagens pela porta 9 (INCL) do módulo NCDM em modo de funcionamento stand-by.\nTente o seguinte se o código é exibido:\na) Comprove a conexão de recepção INCL no módulo NCDM on-line.\nb) Comprove a conexão de transmissão INCL no módulo NCDM stand-by.\nc) Substitua o filtro NCD PFM no módulo NCDM on-line.\nd) Comprove a conexão de recepção INCL no módulo NCDM stand-by.\ne) Comprove a conexão de transmissão INCL no módulo NCDM on-line.\nf) Substitua o filtro NCD PFM no módulo NCDM stand-by."
      },
      {
        "NCDM": "A000",
        "__EMPTY": 0,
        "__EMPTY_1": "Porta com VLM6 foi recuperado e se encontra operativo. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma "
      },
      {
        "NCDM": "A001",
        "__EMPTY": 0,
        "__EMPTY_1": "Tempo de espera finalizado com IMB na porta interna A.",
        "__EMPTY_2": "Este código aparece quando o VLM6 se interrompe por alguma razão.\nTente o seguinte caso este código apareça e o sistema não se interrompa:\na) Reinicie o sistema WESTRACE.\nb) Assegure-se que a configuração não-vital (CED) entre VLM6 e o NCDM é consistente com relação aos estados que se transferem entre eles. O GCSS realiza esta comprovação.\nc) Comprove que somente está instalado um NCDM no sistema e não existe outro módulo DM instalado.\nd) Substitua o módulo NCDM."
      },
      {
        "NCDM": "B000",
        "__EMPTY": 0,
        "__EMPTY_1": "Porta de rede foi recuperada e se encontra operativa. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma "
      },
      {
        "NCDM": "B001",
        "__EMPTY": 0,
        "__EMPTY_1": "Falha no tempo de espera da porta de rede ou tempo finalizado:\nTempo de espera finalizado para a recepção de uma mensagem de entrada (porta de rede do servidor).\nFalha em conseguir uma resposta desde qualquer servidor externo (porta de rede cliente).\nFalha de conexão de rede Ethernet.",
        "__EMPTY_2": "LED de Rx da de rede piscando:\n  Comprovar a configuração da porta de rede na configuração não vital (CED).\n  Substituir o módulo NCDM se a configuração CED estiver correta.\nLED de Rx da porta de rede apagado:\n  Comprovar as conexões externas da porta de rede.\n  Substituir o módulo de proteção PFM ou o módulo NCDM."
      },
      {
        "NCDM": "B018",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 1 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B019",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 1 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 1.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 1.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B0E9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 14 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 14.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 14.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B028",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 2 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B029",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 2 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 2.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 2.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B038",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 3 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B039",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 3 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 3.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 3.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B048",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 4 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B049",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 4 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 4.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 4.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B058",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 5 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B059",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 5 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 5.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 5.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B068",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 6 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B069",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 6 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 6.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 6.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B078",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 7 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B079",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 7 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 7.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 7.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B088",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 8 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B089",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 8 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 8.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 8.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B098",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 9 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B099",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 9 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 9.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 9.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B0A8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 10 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B0A9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 10 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 10.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 10.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B0B8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 11 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B0B9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 11 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 11.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 11.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B0C8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 12 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B0C9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 12 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 12.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 12.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B0D8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 13 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B0D9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 13 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 13.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 13.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B0E8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 14 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B0F8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 15 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B0F9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 15 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 15.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 15.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B108",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 16 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B109",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 16 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 16.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 16.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B118",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 17 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B119",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 17 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 17.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 17.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B128",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 18 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B129",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 18 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 18.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 18.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B138",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 19 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B139",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 19 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 19.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 19.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B148",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 20 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B149",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 20 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 20.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 20.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B158",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 21 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B159",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 21 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 21.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 21.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B168",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 22 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B169",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 22 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 22.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 22.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B178",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 23 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B179",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 23 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 23.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 23.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B188",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 24 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B189",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 24 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 24.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 24.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B198",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 25 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B199",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 25 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 25.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 25.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B1A8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 26 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B1A9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 26 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 26.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 26.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B1B8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 27 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B1B9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 27 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 27.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 27.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B1C8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 28 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B1C9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 28 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 28.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 28.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B1D8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 29 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B1D9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 29 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 29.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 29.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B1E8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 30 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B1E9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 30 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 30.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 30.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B1F8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 31 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B1F9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 31 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 31.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 31.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B208",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 32 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B209",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 32 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 32.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 32.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B218",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 33 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B219",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 33 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 33.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 33.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B228",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 34 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B229",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 34 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 34.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 34.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B238",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 35 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B239",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 35 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 35.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 35.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B248",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 36 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B249",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 36 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 36.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 36.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B258",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 37 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B259",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 37 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 37.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 37.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B268",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 38 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B269",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 38 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 38.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 38.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B278",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 39 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B279",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 39 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 39.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 39.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B288",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 40 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B289",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 40 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 40.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 40.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B298",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 41 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B299",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 41 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 41.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 41.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B2A8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 42 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B2A9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 42 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 42.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 42.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B2B8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 43 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B2B9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 43 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 43.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 43.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B2C8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 44 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B2C9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 44 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 44.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 44.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B2D8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 45 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B2D9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 45 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 45.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 45.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B2E8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 46 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B2E9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 46 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 46.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 46.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B2F8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 47 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B2F9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 47 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 47.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 47.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B308",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 48 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B309",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 48 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 48.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 48.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B818",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 1 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B819",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 1 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 1.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 1.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B828",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 2 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B829",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 2 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 2.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 2.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B838",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 3 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B839",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 3 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 3.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 3.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B848",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 4 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B849",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 4 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 4.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 4.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B858",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 5 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B859",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 5 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 5.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 5.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B868",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 6 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B869",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 6 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 6.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 6.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B878",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 7 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B879",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 7 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 7.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 7.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B888",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 8 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B889",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 8 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 8.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 8.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B898",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 9 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B899",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 9 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 9.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 9.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B8A8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 10 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B8A9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 10 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 10.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 10.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B8B8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 11 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B8B9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 11 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 11.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 11.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B8C8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 12 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B8C9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 12 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 12.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 12.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B8D8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 13 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B8D9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 13 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 13.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 13.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B8E8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 14 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B8E9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 14 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 14.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 14.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B8F8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 15 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B8F9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 15 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 15.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 15.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B908",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 16 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B909",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 16 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 16.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 16.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B918",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 17 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B919",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 17 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 17.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 17.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B928",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 18 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B929",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 18 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 18.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 18.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B938",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 19 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B939",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 19 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 19.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 19.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B948",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 20 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B949",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 20 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 20.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 20.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B958",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 21 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B959",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 21 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 21.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 21.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B968",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 22 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B969",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 22 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 22.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 22.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B978",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 23 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B979",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 23 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 23.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 23.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B988",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 24 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B989",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 24 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 24.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 24.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B998",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 25 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B999",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 25 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 25.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 25.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B9A8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 26 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B9A9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 26 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 26.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 26.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B9B8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 27 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B9B9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 27 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 27.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 27.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B9C8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 28 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B9C9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 28 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 28.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 28.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B9D8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 29 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B9D9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 29 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 29.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 29.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B9E8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 30 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B9E9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 30 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 30.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 30.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "B9F8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 31 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "B9F9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 31 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 31.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 31.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "BA08",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 32 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "BA09",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 32 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 32.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 32.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "BA18",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 33 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "BA19",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 33 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 33.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 33.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "BA28",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 34 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "BA29",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 34 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 34.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 34.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "BA38",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 35 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "BA39",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 35 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 35.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 35.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "BA48",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 36 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "BA49",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 36 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 36.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 36.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "BA58",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 37 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "BA59",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 37 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 37.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 37.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "BA68",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 38 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "BA69",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 38 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 38.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 38.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "BA78",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 39 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "BA79",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 39 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 39.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 39.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "BA88",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 40 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "BA89",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 40 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 40.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 40.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "BA98",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 41 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "BA99",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 41 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 41.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 41.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "BAA8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 42 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "BAA9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 42 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 42.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 42.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "BAB8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 43 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "BAB9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 43 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 43.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 43.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "BAC8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 44 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "BAC9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 44 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 44.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 44.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "BAD8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 45 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "BAD9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 45 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 45.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 45.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "BAE8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 46 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "BAE9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 46 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 46.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 46.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "BAF8",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 47 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "BAF9",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 47 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 47.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 47.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "BB08",
        "__EMPTY": 0,
        "__EMPTY_1": "A sessão 48 da porta de rede B recuperou-se de uma falha e já está operacional. Este código não é mostrado no display, só é armazenado no registro de falhas.",
        "__EMPTY_2": "Nenhuma"
      },
      {
        "NCDM": "BB09",
        "__EMPTY": 0,
        "__EMPTY_1": "Perda de comunicação com a sessão de rede 48 da porta de rede B:\nPorta escravo: Decorrido o tempo de espera por uma mensagem válida.\nPorta mestre: Decorrido tempo de espera por resposta.",
        "__EMPTY_2": "Porta escravo:\nCertificar-se de que o sistema mestre esteja enviando dados para a sessão de rede 48.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que estão corretos.\nPorta mestre:\nCertificar-se de que o sistema escravo funciona corretamente para a sessão de rede 48.\nVerificar as sessões armazenadas nos dados de configuração não-vital (CED) e verificar que coincidem com os sistemas escravos conectados."
      },
      {
        "NCDM": "BAT",
        "__EMPTY": 0,
        "__EMPTY_1": "Nível baixo de tensão na bateria",
        "__EMPTY_2": "Substituir a bateria "
      },
      {
        "NCDM": "DIAG",
        "__EMPTY": 0,
        "__EMPTY_1": "Existem falhas armazenadas no buffer de falhas",
        "__EMPTY_2": "Ligar ou verificar e reiniciar o sistema de diagnóstico externo e realizar um relatório de falhas no buffer de falhas "
      },
      {
        "NCDM": "FLT",
        "__EMPTY": 0,
        "__EMPTY_1": "Existem falhas no buffer de falhas que não foram examinadas por um sistema de diagnóstico externo",
        "__EMPTY_2": "Realizar um relatório de falhas no buffer de falhas através de MoviolaW "
      },
      {
        "NCDM": "TIME",
        "__EMPTY": 0,
        "__EMPTY_1": "Não foi configurado data e hora",
        "__EMPTY_2": "Configurar corretamente data e hora através de MoviolaW ou CTC. É possível configurar data e hora através do protocolo S2 "
      },
      {
        "__EMPTY": 1,
        "__EMPTY_1": "Célula para o caso de que não exista nenhum dos códigos anteriores"
      }
    
  ]
