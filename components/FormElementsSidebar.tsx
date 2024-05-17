import React from "react";
import SidebarBtnElements from "./SidebarBtnElements";
import { FormElements } from "./FormElements";
import { Separator } from "./ui/separator";

function FormElementsSidebar() {
  return (
    <div>
      <p className="text-sm text-foreground/70">Drag and drop elements</p>
      <Separator className="my-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center">
        <p className="text-sm text-muted-foreground col-span-1 md:col-span-2 my-2 place-self-start">
          Layout elements
        </p>
        <SidebarBtnElements formElement={FormElements.TitleField} />
        <SidebarBtnElements formElement={FormElements.SubTitleField} />
        <SidebarBtnElements formElement={FormElements.ParagrahField} />
        <SidebarBtnElements formElement={FormElements.SeparatorField} />
        <SidebarBtnElements formElement={FormElements.SpacerField} />

        <p className="text-sm text-muted-foreground col-span-1 md:col-span-2 my-2 place-self-start">
          Form elements
        </p>
        <SidebarBtnElements formElement={FormElements.TextField} />
        <SidebarBtnElements formElement={FormElements.NumberField} />
        <SidebarBtnElements formElement={FormElements.TextAreaField} />
        <SidebarBtnElements formElement={FormElements.DateField} />
        <SidebarBtnElements formElement={FormElements.SelectField} />
        <SidebarBtnElements formElement={FormElements.CheckboxField} />
      </div>
    </div>
  );
}

export default FormElementsSidebar;
