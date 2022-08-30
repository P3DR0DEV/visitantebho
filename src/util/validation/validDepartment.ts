function validDepartment(department: string) {
  if (
    department !== "almoxarifado" &&
    department !== "custos" &&
    department !== "pcp" &&
    department !== "qualidade" &&
    department !== "ti"
  )
    throw new Error(`Department is not valid. Deparment received: ${department}, expected: "almoxarifado", "custos", "pcp", "qualidade" ou "ti"`);
};

export { validDepartment };
