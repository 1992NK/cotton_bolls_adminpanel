import TextField from "../formFields/TextField";
import ImageUpload from "../imageUpload/ImageUpload";
import FormRow from "./FormRow";

const SeoTab = ({ form, onChange }) => (
  <>
    <FormRow label="Meta Title">
      <TextField placeholder="Meta Title" value={form.metaTitle} onChange={(v) => onChange("metaTitle", v)} />
    </FormRow>
    <FormRow label="Meta Description">
      <TextField multiline placeholder="Meta Description" value={form.metaDescription} onChange={(v) => onChange("metaDescription", v)} />
    </FormRow>
    <FormRow label="Meta Image">
      <ImageUpload multiple={false} files={form.metaImages} onChange={(files) => onChange("metaImages", files)} />
    </FormRow>
  </>
);

export default SeoTab;