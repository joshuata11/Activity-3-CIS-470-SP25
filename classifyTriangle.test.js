
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should classify an Equilateral triangle', () => {
      //Boundary Value Testing
      expect(classifyTriangle(1, 1, 1)).toBe('Equilateral');
      expect(classifyTriangle(2, 2, 2)).toBe('Equilateral');
      expect(classifyTriangle(3, 3, 3)).toBe('Equilateral');
      expect(classifyTriangle(198, 198, 198)).toBe('Equilateral');
      expect(classifyTriangle(199, 199, 199)).toBe('Equilateral');
      expect(classifyTriangle(200, 200, 200)).toBe('Equilateral');

      //Equivalance Class Testing
      expect(classifyTriangle(5, 5, 5)).toBe('Equilateral');
      expect(classifyTriangle(50, 50, 50)).toBe('Equilateral');
      expect(classifyTriangle(100, 100, 100)).toBe('Equilateral');
      expect(classifyTriangle(150, 150, 150)).toBe('Equilateral');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    test('should classify an Isosoceles triangle', () => {
      //Boundary Value Testing
      expect(classifyTriangle(199, 200, 200)).toBe('Isosceles');
      expect(classifyTriangle(200, 199, 200)).toBe('Isosceles');
      expect(classifyTriangle(2, 1, 2 )).toBe('Isosceles');
      expect(classifyTriangle(2, 2, 1 )).toBe('Isosceles');

      //Equivalance Class Testing
      expect(classifyTriangle(5, 5, 8 )).toBe('Isosceles');
      expect(classifyTriangle(7, 10, 7 )).toBe('Isosceles');
      expect(classifyTriangle(8, 10, 10 )).toBe('Isosceles');
      expect(classifyTriangle(150, 150, 20 )).toBe('Isosceles');
      expect(classifyTriangle(20, 150, 150 )).toBe('Isosceles');
      expect(classifyTriangle(150, 20, 150 )).toBe('Isosceles');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
    test('should classify a Scalene triangle', () => {
      //Boundary Value Testing
      expect(classifyTriangle(3, 4, 5)).toBe('Scalene');
      expect(classifyTriangle(198, 199, 200)).toBe('Scalene');
      expect(classifyTriangle(197, 198, 199)).toBe('Scalene');
      

      //Equivalance Class Testing
      expect(classifyTriangle(21, 28, 35)).toBe('Scalene');
      expect(classifyTriangle(150, 120, 110)).toBe('Scalene');
      expect(classifyTriangle(120, 130, 140)).toBe('Scalene');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should return error for invalid inputs', () => {
      //Boundary Value Testing
      expect(classifyTriangle(0, 0, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(0, 1, 1)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(1, 0, 1)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(201, 200, 200)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(201, 200, 200)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(200, 201, 200)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(250, 201, 202)).toBe('Error: Input conditions C1, C2, or C3 failed.');

      //Equivalance Class Testing
      expect(classifyTriangle(150, 0, 100)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(201, 100, 100)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(170, 201, 100)).toBe('Error: Input conditions C1, C2, or C3 failed.');

        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      //Boundary Value Testing
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
      expect(classifyTriangle(10, 5, 4)).toBe('Not a Triangle');
      expect(classifyTriangle(5, 15, 10)).toBe('Not a Triangle');

      //Equivalance Class Testing
      expect(classifyTriangle(10, 20, 30)).toBe('Not a Triangle');
      expect(classifyTriangle(110, 20, 130)).toBe('Not a Triangle');
      expect(classifyTriangle(100, 60, 40)).toBe('Not a Triangle');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  });
  