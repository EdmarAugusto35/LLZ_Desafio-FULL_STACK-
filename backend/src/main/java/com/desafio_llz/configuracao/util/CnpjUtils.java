package com.desafio_llz.configuracao.util;

public class CnpjUtils {

    public static String formatarCnpj(String cnpj){
        cnpj = cnpj.replaceAll("[^0-9]", "");

        if (cnpj.length() != 14) {
            return cnpj;
        }

        // Formata o CNPJ
        return cnpj.substring(0, 2) + "." +
                cnpj.substring(2, 5) + "." +
                cnpj.substring(5, 8) + "/" +
                cnpj.substring(8, 12) + "-" +
                cnpj.substring(12, 14);
    }
}
