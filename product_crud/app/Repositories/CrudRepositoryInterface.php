<?php
namespace App\Repositories;

interface CrudRepositoryInterface
{
    public function fetchAll();

    public function fetch($id);

    public function create(Request $request);

    public function update(Request $request, $id);

    public function delete($id);
}
