package com.mycompany.myapp.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CourseWithTNDto {

    private String courseName;

    private String courseLocation;

    private String courseContent;

    private String teacherName;
}
