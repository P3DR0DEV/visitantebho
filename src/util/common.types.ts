type Department = "almoxarifado" | "custos" | "pcp" | "qualidade" | "ti";

type Roles = "administrator" | "manager" | "writer" | "reader";

type SystemsAvailable = "cost-breakdown" | "levamento-custos" | "pme-auth";

type SystemPermission = { systemDescription: SystemsAvailable; role: Roles };

export { Department, Roles, SystemsAvailable, SystemPermission };
