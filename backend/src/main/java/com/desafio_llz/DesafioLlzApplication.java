package com.desafio_llz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EntityScan("com.desafio_llz")
@EnableJpaRepositories(basePackages = "com.desafio_llz")
public class DesafioLlzApplication {

    public static void main(String[] args) {
        SpringApplication.run(DesafioLlzApplication.class, args);
    }
}
