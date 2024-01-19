package com.desafio_llz.controller.dto;

import jakarta.validation.constraints.NotNull;

public record CondominioDto(
        @NotNull String cnpj,
        @NotNull String razaosocial,
        @NotNull String email
){}
