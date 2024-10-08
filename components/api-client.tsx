"use client"

import { useState } from "react"
import { Code, Loader2, Send } from "lucide-react"
import JSONPretty from "react-json-pretty"

import { DetectionApiData } from "@/config/detection-apis"
import { DetectionApiCall } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

import { Spotlight } from "./spotlight"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function ApiClient() {
  const [method, setMethod] = useState("POST")
  const [scanType, setScanType] = useState("Transaction")
  const [apiData, setApiData] = useState(DetectionApiData.Transaction)
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    const apiCallData = DetectionApiData[scanType]
    const res = await DetectionApiCall(apiCallData)
    setResponse(JSON.stringify(res))
    setIsLoading(false)
  }

  const changeScanType = (type: string) => {
    setScanType(type)
    setResponse("")
    const newData = DetectionApiData[type]
    setApiData({ ...newData })
  }
  console.log({ apiData, scanType })

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Spotlight
        className="-top-50 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Card className="bg-background shadow-lg rounded-3xl">
        <CardContent className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <Select value={method} onValueChange={setMethod}>
                <SelectTrigger className="w-full sm:w-[250px]">
                  <SelectValue placeholder="Method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="POST">POST</SelectItem>
                </SelectContent>
              </Select>
              <Input
                readOnly={true}
                type="text"
                placeholder="Enter API URL"
                value={"https://api.sifu.com/scan"}
                className="flex-grow"
              />
              <Select value={scanType} onValueChange={changeScanType}>
                <SelectTrigger className="w-full sm:w-[350px]">
                  <SelectValue placeholder="Select scan type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Transaction">Scan transactions</SelectItem>
                  <SelectItem value="SmartContract">Scan contract</SelectItem>
                  <SelectItem value="ContractAddress">
                    Scan contract address
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
           <pre className="bg-muted/50 p-4 rounded-lg overflow-x-auto border border-border text-start">
              <JSONPretty id="json-pretty" data={apiData.body}></JSONPretty>
            </pre>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>Processing...</>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Request
                </>
              )}
            </Button>
          </form>
          {response && (
            <div className="mt-8">
              <h2 className="text-lg font-bold mb-2 text-foreground flex">
                Response
              </h2>
              <pre className="bg-muted/50 p-4 rounded-lg overflow-x-auto border border-border text-start">
                <JSONPretty id="json-pretty" data={response}></JSONPretty>
              </pre>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
