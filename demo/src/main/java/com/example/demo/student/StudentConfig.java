package com.example.demo.student;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class StudentConfig {

  @Bean
  CommandLineRunner commandLineRunner(StudentRepository repository) {
    return args -> {
      Student Thean = new Student("Thean", "Thean@gmail.com", LocalDate.of(2004, Month.JUNE, 8));

      Student Kaka = new Student("Kaka", "Kaka@gmail.com", LocalDate.of(2003, Month.MAY, 8));

      repository.saveAll(List.of(Thean, Kaka));
    };


  }
}
