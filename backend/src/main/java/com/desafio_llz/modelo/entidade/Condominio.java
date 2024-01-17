package com.desafio_llz.modelo.entidade;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "condominiollz")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Condominio {

    @Id
    @NotEmpty(message = "{campo.cnpj.obrigatorio}")
    @NotNull
    @Column(unique = true, length = 14, columnDefinition = "serial")
    private String cnpj;

    @Column(nullable = false, length = 150, name = "razaosocial")
    @NotEmpty(message = "{campo.razaosocial.obrigatorio}")
    @NotNull
    private String razaosocial;

    @Column(nullable = false, length = 150, unique = true, name = "email")
    @NotNull
    @Email(message = "{campo.email.invalido}")
    private String email;

    @Column(name = "data_cadastro", updatable = false)
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataCadastro;

}
