package com.desafio_llz.controller.dto.mapper;

import com.desafio_llz.controller.dto.CondominioDto;
import com.desafio_llz.modelo.entidade.Condominio;
import org.springframework.stereotype.Component;

@Component
public class CondominioMapper {
    public CondominioDto toDto(Condominio condominio){
        if (condominio == null){
            return null;
        }
        return new CondominioDto(condominio.getCnpj(), condominio.getRazaosocial(), condominio.getEmail());
    }

    public Condominio toEntity(CondominioDto condominioDto){
        if (condominioDto == null){
            return null;
        }
        Condominio condominio = new Condominio();
        if (condominioDto.cnpj() != null){
            condominio.setCnpj(condominioDto.cnpj());
        }
        condominio.setRazaosocial(condominioDto.razaosocial());
        condominio.setEmail(condominioDto.email());
        return condominio;

    }
}
