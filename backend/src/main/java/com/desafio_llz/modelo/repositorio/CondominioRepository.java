package com.desafio_llz.modelo.repositorio;

import com.desafio_llz.modelo.entidade.Condominio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CondominioRepository extends JpaRepository<Condominio, String> {
}
