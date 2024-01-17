package com.desafio_llz.controller;

import com.desafio_llz.modelo.entidade.Condominio;
import com.desafio_llz.modelo.repositorio.CondominioRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


@RestController
@RequestMapping("/condominio")
public class CondominioController {

    @Autowired
    private CondominioRepository condominioRepository;

    public CondominioController(CondominioRepository condominioRepository) {
        this.condominioRepository = condominioRepository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Condominio salvarCondominio(@RequestBody @Valid Condominio condominio){
        return condominioRepository.save(condominio);
    }

    @GetMapping
    public Page<Condominio> listarTodosCondominios(Pageable pageable){
        return condominioRepository.findAll(pageable);
    }

    @DeleteMapping("/{cnpj}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletarCondominio(@PathVariable String cnpj){
        condominioRepository
                .findById(cnpj)
                .map(condominio->{
                    condominioRepository.delete(condominio);
                    return Void.TYPE;
                })
                .orElseThrow(
                        () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Condominio não encontrado"));
    }

    @PutMapping("/{cnpj}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizarCondominio(@PathVariable String cnpj, @RequestBody Condominio condominioAtulizado){
        condominioRepository
                .findById(cnpj)
                .map(condominio -> {
                    condominio.setEmail(condominioAtulizado.getEmail());
                    condominio.setRazaosocial(condominioAtulizado.getRazaosocial());
                   return condominioRepository.save(condominio);
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Condominio não encontrado"));
    }
}
