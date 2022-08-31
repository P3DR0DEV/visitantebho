function validRole(role: string) {
  if (
    role !== "administrator" &&
    role !== "manager" &&
    role !== "writer" &&
    role !== "reader"
  )
    throw new Error(`Role is not valid. Role received: ${role}, expected: "administrator", "manager", "writer", ou "reader"`);
};

export { validRole };
