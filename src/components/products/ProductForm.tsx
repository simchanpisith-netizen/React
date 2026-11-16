import React from 'react'
import z from 'zod'
import { useForm } from "@tanstack/react-form"
import { 
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
 } from '../ui/field';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog"

 
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useCategoryQuery } from '../../hooks/useCategoryQuery';




const productSchema = z.object({
    name: z.string().min(1, "Name is required"),
    price: z.number(),
    categoryId: z.number(),
    qty: z.number().int().min(0, "Quantity must be 0 or more"),
});

export type ProductSchema = z.infer<typeof productSchema>

interface Props {
  open : boolean;
  setOpen : (open: boolean) => void;
}

const ProductForm = ({ open, setOpen }: Props) => {
  const {data, isLoading} = useCategoryQuery()
  

  const form = useForm({
    defaultValues: {
      name: "",
      price: 0,
      categoryId: 0,
      qty: 0,
    },
    validators: {
      onSubmit: productSchema,
    },
    onSubmit: async ({ value }) => {
      console.log("Value",value)
    },
  })


  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Product Form</DialogTitle>
            <DialogDescription>Product Information Detail</DialogDescription>
          </DialogHeader>
        <form
          id="form-tanstack-input"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup>
            <form.Field
              name="name"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor="form-tanstack-input-username">
                      Product Name
                    </FieldLabel>
                    <Input
                      id="form-tanstack-input-username"
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Enter product name"
                      autoComplete="username"
                    />
                    <FieldDescription>
                      
                    </FieldDescription>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />

            <form.Field
              name="price"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor="form-tanstack-input-username">
                      Price
                    </FieldLabel>
                    <Input
                      id="form-tanstack-input-username"
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                      aria-invalid={isInvalid}
                      placeholder="Enter product price"
                      
                    />
                    <FieldDescription>
                    </FieldDescription>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />

            <form.Field
              name="qty"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor="form-tanstack-input-username">
                      Quantity
                    </FieldLabel>
                    <Input
                      id="form-tanstack-input-username"
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                      aria-invalid={isInvalid}
                      placeholder="Enter quantity"
                      
                    />
                    <FieldDescription>
                      
                    </FieldDescription>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />

            <form.Field
                name="categoryId"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field orientation="responsive" data-invalid={isInvalid}>
                      <FieldContent>
                        <FieldLabel htmlFor="form-tanstack-select-language">
                          Category
                        </FieldLabel>

                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </FieldContent>
                      <Select
                        name={field.name}
                        value={String(field.state.value)}
                        onValueChange={(val) => field.handleChange(Number(val))}
                      >
                        <SelectTrigger
                          id="form-tanstack-select-language"
                          aria-invalid={isInvalid}
                          className="min-w-30"
                        >
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="item-aligned">
                          {data.data.map(category => (
                            <SelectItem value={category.id}> {category.name}
                            </SelectItem>
                          ))}
                          
                            
                            
                        
                        </SelectContent>
                      </Select>
                    </Field>
                  );
                }}
              />
          </FieldGroup>
        </form>
      <DialogFooter>
            <Field orientation="horizontal" className="flex justify-end">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button className="bg-blue-500" type="submit" form="product-form">
                Save
              </Button>
            </Field>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ProductForm