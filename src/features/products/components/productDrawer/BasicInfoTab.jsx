import { categoryOptions } from "../../data/filterOptions";
import TextField from "../formFields/TextField";
import SelectField from "../formFields/SelectField";
import TagsInput from "../formFields/TagsInput";
import ImageUpload from "../imageUpload/ImageUpload";
import FormRow from "./FormRow";

const BasicInfoTab = ({ form, onChange }) => (
  <>
    <FormRow label="Product Title/Name">
      <TextField placeholder="Product Title/Name" value={form.name} onChange={(v) => onChange("name", v)} />
    </FormRow>
    <FormRow label="Product Description">
      <TextField multiline placeholder="Product Description" value={form.description} onChange={(v) => onChange("description", v)} />
    </FormRow>
    <FormRow label="Product Images">
      <ImageUpload files={form.images} onChange={(files) => onChange("images", files)} />
    </FormRow>
    <FormRow label="Product SKU">
      <TextField placeholder="Product SKU" value={form.sku} onChange={(v) => onChange("sku", v)} />
    </FormRow>
    <FormRow label="Product Barcode">
      <TextField placeholder="Product Barcode" value={form.barcode} onChange={(v) => onChange("barcode", v)} />
    </FormRow>
    <FormRow label="Category">
      <SelectField placeholder="Select Category" options={categoryOptions} value={form.category} onChange={(v) => onChange("category", v)} />
    </FormRow>
    <FormRow label="Default Category">
      <SelectField placeholder="Default Category" options={categoryOptions} value={form.defaultCategory} onChange={(v) => onChange("defaultCategory", v)} />
    </FormRow>
    <FormRow label="Product Price">
      <TextField type="number" prefix="$" value={form.price} onChange={(v) => onChange("price", v)} />
    </FormRow>
    <FormRow label="Sale Price">
      <TextField type="number" prefix="$" value={form.salePrice} onChange={(v) => onChange("salePrice", v)} />
    </FormRow>
    <FormRow label="Product Quantity">
      <TextField type="number" value={form.stock} onChange={(v) => onChange("stock", v)} />
    </FormRow>
    <FormRow label="Product Slug">
      <TextField placeholder="Product Slug" value={form.slug} onChange={(v) => onChange("slug", v)} />
    </FormRow>
    <FormRow label="Product Tags">
      <TagsInput tags={form.tags} onChange={(tags) => onChange("tags", tags)} />
    </FormRow>
  </>
);

export default BasicInfoTab;