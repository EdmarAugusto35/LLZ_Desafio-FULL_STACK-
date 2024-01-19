package com.desafio_llz.controller.dto;

import java.util.List;

public record CondominioPageDto(List<CondominioDto> condominios, long totalElements, int totalPages){
}
