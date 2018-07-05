BladeShield.config('<POST ISSUE URL>').install()

var a = 0;

try {
  a.b()
} catch (error) {
  BladeShield.catchException(error)
}

a.c()
