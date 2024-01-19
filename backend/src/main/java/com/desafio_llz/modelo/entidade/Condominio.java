package com.desafio_llz.modelo.entidade;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    @PrePersist
    public void prePersist() {
        // Certifique-se de que o CNPJ está atribuído antes de persistir
        if (cnpj == null || cnpj.isEmpty()) {
            throw new IllegalStateException("CNPJ deve ser atribuído antes de persistir");
        }
    }

}
