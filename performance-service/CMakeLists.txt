cmake_minimum_required(VERSION 3.16)
project(performance_service)

set(CMAKE_CXX_STANDARD 17)

include_directories(include)

add_executable(performance_service
  src/main.cpp
  src/performance.cpp
)
