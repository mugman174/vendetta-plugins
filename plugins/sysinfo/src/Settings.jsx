import { React, ReactNative as RN } from "@vendetta/metro/common";
import { useProxy } from "@vendetta/storage";
import { storage } from "@vendetta/plugin";
import { Forms } from "@vendetta/ui/components";

const { FormRow, FormSection, FormSwitch } = Forms;

const categories = ["device", "hardware", "software", "discord", "react"]; // TODO: move this into storage or somewhere more global
for (const cat of categories) storage[cat] ??= true;

export default () => {
  useProxy(storage);
  return (
    <RN.ScrollView style={{ flex: 1 }}>
      <FormSection title="Options" titleStyleType="no_border">
        {categories.map((category) => (
          <FormRow
            label={category}
            trailing={
              <FormSwitch
                value={storage[category]}
                onValueChange={(v) => (storage[category] = v)}
              />
            }
          />
        ))}
      </FormSection>
    </RN.ScrollView>
  );
};
