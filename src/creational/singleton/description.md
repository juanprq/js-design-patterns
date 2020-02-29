# Singleton

A singleton is an object with a single instance with a single point of access

a common way of singletones is to use simple javascript modules, if we export a collection of functions that mutates a state in the module, that behaves as a singleton.

Another common wayt is to have a class in a module, but instead of exporting the class, you will export the instance of that class, that way you will have only one instance for the entire application.

Algo curioso es que en node, dependiendo del sistema operativo, el singleton por modulos puede no lograrse, esto se debe a que si escribo el nombre del modulo de manera diferente (case insensitive) puede que node me lo cachee de manera diferente y sean 2 instancias diferentes.
