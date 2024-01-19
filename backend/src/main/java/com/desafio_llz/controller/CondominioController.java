package com.desafio_llz.controller;

import com.desafio_llz.controller.dto.CondominioDto;
import com.desafio_llz.controller.dto.CondominioPageDto;
import com.desafio_llz.modelo.service.CondominioService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/condominio")
@CrossOrigin("*")
public class CondominioController {

    @Autowired
    private CondominioService condominioService;


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CondominioDto salvarCondominio(@RequestBody @Valid CondominioDto condominio) {
        return condominioService.salvarCondominio(condominio);
    }

    @GetMapping("/{cnpj}")
    public CondominioDto buscarCondominioPorCnpj(@PathVariable @Valid String cnpj) {
        return condominioService.getCondominioByCnpj(cnpj);
    }

    @GetMapping
    public CondominioPageDto listarTodosCondominios(
            @RequestParam(defaultValue = "0") @PositiveOrZero int page,
            @RequestParam(defaultValue = "10") @Positive @Max(100) int pageSize) {
        return condominioService.listarTodosCondominios(page, pageSize);
    }

    @DeleteMapping("/{cnpj}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletarCondominio(@PathVariable String cnpj) {
        condominioService.deletarCondominio(cnpj);
    }

    @PutMapping("/{cnpj}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizarCondominio(@PathVariable String cnpj, @RequestBody CondominioDto condominioAtulizado) {
        condominioService.atualizarCondominio(cnpj, condominioAtulizado);
    }
}
