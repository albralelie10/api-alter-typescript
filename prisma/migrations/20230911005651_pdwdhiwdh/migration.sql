-- CreateTable
CREATE TABLE "sample" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "sample_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sample_id_key" ON "sample"("id");

-- CreateIndex
CREATE UNIQUE INDEX "sample_email_key" ON "sample"("email");
