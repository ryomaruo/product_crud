<?php

namespace App\Services;

use App\Services\ProductServiceInterface;
use App\Repositories\ProductRepository;
use Illuminate\Validation\Factory as ValidateFactory;

/**
 * Class ProductService
 * @package Product\Services
 */
class ProductService implements ProductServiceInterface
{
    /**
     * @var ProductRepository
     */
    protected $ProductRepository;

    /**
     * @var ValidateFactory
     */
    protected $validateFactory;

    /**
     * @var array
     */
    protected $rules = [
        "name" => "bail|required|max: 32",
        "model_number" => "bail|required|max:50",
        "price" => "bail|required|integer|min:0",
        "stock" => "bail|required|integer|min:0",
        "discontinued" => "required"
    ];

    /**
     * @param ProductRepository $ProductRepository
     * @param ValidateFactory $validateFactory
     */
    public function __construct(ProductRepository $ProductRepository, ValidateFactory $validateFactory)
    {
        $this->ProductRepository = $ProductRepository;
        $this->validateFactory = $validateFactory;
    }

    /**
     * @param $id
     * @return mixed
     */
    public function fetch($id)
    {
        return $this->ProductRepository->fetch($id);
    }

    /**
     * @return mixed
     */
    public function fetchList()
    {
        return $this->ProductRepository->fetchAll();
    }

    /**
     * @param $request
     * @param $id
     * @return $id
     */
    public function save(Request $request, $id=null)
    {
        $validation = $this->validateFactory->make($input, $this->rules);
        if ($validation->fails()) {
            return null;
        }

        if (is_null($id)) {
            $id = $this->ProductRepository->create($request);
        } else {
            $id = $this->ProductRepository->update($id, $request);
        }

        return $id;
    }

    /**
     * @param $id
     * @return bool
     */
    public function delete($id)
    {
        $this->ProductRepository->delete($id);
        return true;
    }

    /**
     * @return mixed
     */
    public function createEntity()
    {
        return $this->ProductRepository->createEntity();
    }
}