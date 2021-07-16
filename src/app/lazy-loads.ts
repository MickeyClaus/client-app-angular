export const clientForm = () =>
  import("./pages/client-form/modules/client-form.module").then((m) => m.ClientFormModule);

export const createdClient = () =>
  import("./pages/created-client/modules/created-client-routing.module").then((m) => m.CreatedClientRoutingModule);



