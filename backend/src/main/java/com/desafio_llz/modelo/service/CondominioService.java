package com.desafio_llz.modelo.service;

import com.desafio_llz.controller.dto.CondominioDto;
import com.desafio_llz.controller.dto.CondominioPageDto;
import com.desafio_llz.controller.dto.mapper.CondominioMapper;
import com.desafio_llz.modelo.entidade.Condominio;
import com.desafio_llz.modelo.repositorio.CondominioRepository;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CondominioService {

    @Autowired
    private final CondominioRepository condominioRepository;

    @Autowired
    private CondominioMapper condominioMapper;

    public CondominioService(CondominioRepository condominioRepository, CondominioMapper condominioMapper) {
        this.condominioRepository = condominioRepository;
        this.condominioMapper = condominioMapper;
    }

    public CondominioDto salvarCondominio(CondominioDto condominio) {
        return condominioMapper.toDto(condominioRepository.save(condominioMapper.toEntity(condominio)));
    }


    public CondominioPageDto listarTodosCondominios(@PositiveOrZero  int page, @Positive @Max(100) int pageSize) {
      Page<Condominio>  condominioPage = condominioRepository.findAll(PageRequest.of(page,pageSize));
        List<CondominioDto> condominioDtoList = condominioPage.get().map(condominioMapper::toDto).toList();
        return new CondominioPageDto(condominioDtoList, condominioPage.getTotalElements(), condominioPage.getTotalPages());
    }

    public void deletarCondominio(String cnpj) {
        condominioRepository.delete(condominioRepository.findById(cnpj)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Condominio não encontrado")));
    }

    public CondominioDto atualizarCondominio(String cnpj, CondominioDto condominio) {
        return condominioRepository.findById(cnpj)
                .map(condominioAtualizado -> {
                    condominioAtualizado.setRazaosocial(condominio.razaosocial());
                    condominioAtualizado.setEmail(condominio.email());
                    return condominioMapper.toDto(condominioRepository.save(condominioMapper.toEntity(condominio)));
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Condominio não encontrado"));
    }

    public CondominioDto getCondominioByCnpj(@NotNull @Positive String cnpj) {
        return condominioRepository.findById(cnpj).map(condominioMapper::toDto)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Condominio não encontrado"));
    }
}