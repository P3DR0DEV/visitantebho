function validSystemsAvailables(systemDescription: string) {
  if (
    systemDescription !== "cost-breakdown" &&
    systemDescription !== "levantamento-custos" &&
    systemDescription !== "pme-auth"
  )
    throw new Error(`Systems availables is not valid. Systems received: ${systemDescription}, expected: "cost-breakdown", "levantament-custos", ou "pme-auth"`);
};

export { validSystemsAvailables };
