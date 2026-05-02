---
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
  initialExpandLevel: 2
---

# JavaScript: Grammar and Types

## Basic Syntax & Comments

- Case-sensitive language
- Uses Unicode character set
- Statements & expressions
- Comments
  - Single-line (//)
  - Multi-line (/\* \*/)

## Declarations

- var
  - Function-scoped
  - Legacy usage
- let
  - Block-scoped
- const
  - Block-scoped
  - Cannot be reassigned

## Variable Scope

- Global scope
- Function scope
- Block scope (let, const)

## Variable Hoisting

- Declarations moved to top
- var → initialized as undefined
- let/const → not initialized (temporal dead zone)

## Data Structures & Types

### Primitive Types

- Number
- String
- Boolean
- Null
- Undefined
- Symbol
- BigInt

### Objects

- Collections of properties
- Key-value pairs
- Reference type

## Type Conversion

- Implicit coercion
  - == performs conversion
- Strict comparison
  - === avoids coercion
- Boolean conversion
  - true → 1
  - false → 0

## Literals

### Numeric Literals

- Integer: 42
- Float: 3.14
- Exponential: 1e3
- Binary: 0b1010
- Octal: 0o755
- Hex: 0xFF

### String Literals

- Single quotes (' ')
- Double quotes (" ")
- Template literals (` `)
  - Supports interpolation: ${expression}

### Object Literals

- {}
- Key-value structure

### Array Literals

- []
- Ordered collection

### Boolean Literals

- true
- false

## Objects

- Built-in Objects
  - Array
  - Date
  - Math
  - Object
  - String
  - Number
- Custom Objects
  - Created via constructor
  - Created via object literal

## Key Concepts

- Dynamic typing
- Loosely typed language
- First-class functions
- Prototype-based object system
