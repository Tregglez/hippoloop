import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: "USD" | "EUR" | "GBP" | "BDT" | "AUD" | "CAD" | "JPY",
    notation?: Intl.NumberFormatOptions["notation"]
  } = {}
) {
  const {currency = "AUD", notation = 'compact' } = options

  const numaricPrice = typeof price === "string" ? parseFloat(price) : price

  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2
  }).format(numaricPrice)
}
